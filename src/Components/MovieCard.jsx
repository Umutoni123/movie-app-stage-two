import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './../css/card.css'

function MovieCard({ movie }) {
  return (
    <div className="movie-card" data-testid="movie-card">
      <Link to={`/movies/${movie.id}`}>
      <div className="like-icon">
        <FontAwesomeIcon icon={faHeart}  />
      </div>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
          data-testid="movie-poster"
        />
        <div className="movie-info">
          <h2 className="movie-title" data-testid="movie-title">
            {movie.title}
          </h2>
          <p className="movie-release-date" data-testid="movie-release-date">
            Release Date: {movie.release_date}
          </p>
        </div>
      </Link>
    </div>
   
  );
}

export default MovieCard;
