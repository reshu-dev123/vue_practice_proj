import React, { useState, useEffect } from 'react';

const API_KEY = "c585cc57748118ea84f6c89514fa98c2";
const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";  // Keep the trending API URL for initial fetch
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";  // URL for search queries

const SearchFunct = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);  // Set loading to true initially
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Fetch movies based on search query and page number
  const fetchMovies = async (page, query = "") => {
    try {
      setLoading(true);
      const url = query
        ? `${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`
        : `${BASE_URL}?api_key=${API_KEY}&page=${page}`; // If no query, fetch trending movies
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
    fetchMovies(currentPage, searchQuery); // Fetch movies when the page or searchQuery changes
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
    setSearchQuery(event.target.value); // Update search query
    setCurrentPage(1); // Reset to first page when search query changes
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    fetchMovies(1, searchQuery); // Fetch movies on search submit
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

      {/* Display loading or results based on search */}
      {loading ? (
        <p>Loading...</p>
      ) : searchQuery && movies.length === 0 ? (
        <p>No movies found for "{searchQuery}"</p> // Show no results message
      ) : (
        <div>
          {/* table format display */}
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Title</th>
                <th>Release Date</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={movie.id}>
                  <td>{(currentPage - 1) * 20 + (index + 1)}</td>
                  <td>{movie.title}</td>
                  <td>{movie.release_date}</td>
                  <td>{movie.vote_average}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* pagination display */}
          <div>
            <button onClick={handlePrevPage}>
              Previous
            </button>
            <span> Page {currentPage} of {totalPages} </span>
            <button onClick={handleNextPage}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFunct;
