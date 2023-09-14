import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details by ID from the API
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=e04aef010dc35386aca0e4a9887b0bdb`)
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 data-testid="movie-title">{movieDetails.title}</h1>
      <p data-testid="movie-release-date">Release Date (UTC): {movieDetails.release_date}</p>
      <p data-testid="movie-runtime">Runtime: {movieDetails.runtime} minutes</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
