import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './../css/card.css'

function MovieCard({ movie }) {
  return (
    <div className="movie-card-card relative" data-testid="movie-card">
      <Link to={`/movies/${movie.id}`}>
      <div className="like-icon">
        <FontAwesomeIcon icon={faHeart} style={{ color: '#000000' }} />
      </div>
        <div className=" movie-poster-card">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          
          data-testid="movie-poster"
        />
        </div>
        
        
        <div className="movie-info-card flex-col justify-center mt-3 ml-5">
          <h2 className="movie-title-card font-bold" data-testid="movie-title">
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
