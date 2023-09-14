import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function HomePage() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    // Fetch top-rated movies from the API
    axios
      .get('https://api.themoviedb.org/3/movie/top_rated?api_key=e04aef010dc35386aca0e4a9887b0bdb')
      .then((response) => {
        setTopMovies(response.data.results.slice(0, 10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Top 10 Movies</h1>
      <div className="movie-grid">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
