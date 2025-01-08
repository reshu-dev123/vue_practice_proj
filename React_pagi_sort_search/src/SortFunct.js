import React, { useState, useEffect } from 'react';
import upArrow from './assets/up-arrow.png';
import downArrow from './assets/down-arrow.png';
import sortIcon from './assets/sort.png'

const API_KEY = "c585cc57748118ea84f6c89514fa98c2";
const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";

const SortFunct = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

    const fetchMovies = async (page, query = "") => {
        try {
            setLoading(true);
            const url = query
                ? `${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`
                : `${BASE_URL}?api_key=${API_KEY}&page=${page}`;
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
            setTotalPages(data.total_pages);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching movies:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies(currentPage, searchQuery);
    }, [currentPage, searchQuery]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchMovies(1, searchQuery);
    };

    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }

        setSortConfig({ key, direction });

        const sortedMovies = [...movies].sort((a, b) => {
            if (key === "title") {
                return direction === "asc"
                    ? a.title.localeCompare(b.title)
                    : b.title.localeCompare(a.title);
            } else if (key === "release_date") {
                return direction === "asc"
                    ? new Date(a.release_date) - new Date(b.release_date)
                    : new Date(b.release_date) - new Date(a.release_date);
            } else if (key === "vote_average") {
                return direction === "asc"
                    ? a.vote_average - b.vote_average
                    : b.vote_average - a.vote_average;
            } else if (key === "sno") {
                // S No. sorting doesn't need recalculation as it's index-based
                return direction === "asc" ? a.id - b.id : b.id - a.id;
            }
            return 0;
        });

        setMovies(sortedMovies);
    };

    return (
        <div>
            <h1>Trending Movies</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>

            {loading ? (
                <p>Loading...</p>
            ) : searchQuery && movies.length === 0 ? (
                <p>No movies found for "{searchQuery}"</p>
            ) : (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th >
                                    Movie id
                                    <img
                                        onClick={() => handleSort("sno")}
                                        src={sortIcon}
                                        alt="down arrow"
                                    />
                                </th>
                                <th >
                                    Movie Title
                                    <img 
                                    onClick={() => handleSort("title")} 
                                    src={sortIcon} 
                                    alt="up arrow" 
                                    />
                                </th>
                                <th>
                                    Release Date
                                    <img  
                                    onClick={() => handleSort("release_date")}
                                    src={sortIcon} 
                                    alt="down arrow" 
                                    />
                                </th>
                                <th>
                                    Rating
                                    <img 
                                    onClick={() => handleSort("vote_average")} 
                                    src={sortIcon} 
                                    alt="down arrow" 
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies.map((movie) => {
                                return (
                                    <tr key={movie.id}>
                                        <td>{movie.id}</td>
                                        <td>{movie.title}</td>
                                        <td>{movie.release_date}</td>
                                        <td>{movie.vote_average}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div>
                        <button onClick={handlePrevPage} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span> Page {currentPage} of {totalPages} </span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SortFunct;
