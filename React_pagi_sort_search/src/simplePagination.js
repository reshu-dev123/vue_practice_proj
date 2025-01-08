import React, { useState, useEffect } from "react";

const API_KEY = "c585cc57748118ea84f6c89514fa98c2";
const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";

const SimplePagination = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch movies on page change
  const fetchMovies = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&page=${page}`);
      const data = await response.json();
      setMovies(data.results);
    //   setMovies(data.results.slice(0, 10)); // Limit to 10 movies per page
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

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

  return (
    <div>
      <h1>Trending Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
        {/* list type display */}
          {/* <div>         
            {movies.map((movie,index) => (
              <ul key={movie.id}>
                <strong>{(currentPage - 1) * 20 + (index + 1)}.{movie.title}</strong> Release date- {movie.release_date || "N/A"}  Rating -{movie.vote_average}
              </ul>
            ))}
          </div> */}

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

export default SimplePagination;
