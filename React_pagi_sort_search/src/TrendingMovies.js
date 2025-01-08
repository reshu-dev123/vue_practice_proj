import React, { useEffect, useState } from 'react';

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
  
    // Fetch function to get movies for a specific page
    const fetchMovies = async (page = 1) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=c585cc57748118ea84f6c89514fa98c2&page=${page}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch trending movies');
        }
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };
  
    // Fetch movies on initial load and when the page changes
    useEffect(() => {
      fetchMovies(currentPage);
    }, [currentPage]);
  
    // Handlers for pagination
    const handleNextPage = () => {
      if (currentPage < totalPages) {  
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    };
  
    if (error) {
      return <p>{error}</p>;
    }

      // Calculate the movies to display on the current page
  const startIndex = (currentPage - 1) * 10; //If currentPage = 2 , 2-1*10 = 1,1+10 = 11
  const displayedMovies = movies.slice(startIndex, startIndex + 10);
  
    return (
      <div>
        <h1>Trending Movies</h1>
        <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {displayedMovies.map((movie, index) => (
            <tr key={movie.id}>
              <td>{startIndex + index + 1}</td>
              <td>{movie.title}</td>
              <td>{movie.vote_average}</td>
            </tr>
          ))}
        </tbody>
      </table>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={{ marginRight: '10px' }}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            style={{ marginLeft: '10px' }}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default TrendingMovies;