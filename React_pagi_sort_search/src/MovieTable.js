import React, { useEffect, useState } from 'react';
import upArrow from './assets/up-arrow.png';
import downArrow from './assets/down-arrow.png';

const MovieTable = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: 'title',
    direction: 'ascending',
  });

  const apiEndpoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=c585cc57748118ea84f6c89514fa98c2&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) throw new Error('Failed to fetch movies');
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [apiEndpoint]);

  const sortedMovies = React.useMemo(() => {
    const sortedArray = [...movies];
    const { key, direction } = sortConfig;
    sortedArray.sort((a, b) => {
      if (key === 'release_date') {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return direction === 'ascending' ? dateA - dateB : dateB - dateA;
      } else if (key === 'rating') {
        return direction === 'ascending' ? a.vote_average - b.vote_average : b.vote_average - a.vote_average;
      } else {
        return direction === 'ascending' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      }
    });

    return sortedArray;
  }, [movies, sortConfig]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <table>
        <thead>
          <tr>
            {['title', 'release_date', 'rating'].map((key) => (
              <th
                key={key}
                onClick={() => handleSort(key)}
                style={{ backgroundColor: 'black', color: 'white', padding: '10px', cursor: 'pointer' }}
              >
                {key === 'title' && 'Title'}
                {key === 'release_date' && 'Release Date'} 
                {key === 'rating' && 'Rating'}
                <div style={{ display: 'inline-block', marginLeft: '8px' }}>
                  <img
                    src={upArrow}
                    alt="up arrow"
                    style={{
                      width: 20,
                      height: 20,
                      opacity: sortConfig.key === key && sortConfig.direction === 'ascending' ? 1 : 0.5,
                    }}
                  />
                  <img
                    src={downArrow}
                    alt="down arrow"
                    style={{
                      width: 20,
                      height: 20,
                      opacity: sortConfig.key === key && sortConfig.direction === 'descending' ? 1 : 0.5,
                      marginLeft: '4px',
                    }}
                  />
                </div>
              </th>
            ))}
            <th style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>Overview</th>
          </tr>
        </thead>
        <tbody>
          {sortedMovies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.release_date}</td>
              <td>{movie.vote_average}</td>
              <td>{movie.overview}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
