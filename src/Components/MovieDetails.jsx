import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../css/MovieDetails.css';
import '../css/SideBar.css'
import vid from '../img/tv.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm,faTv, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

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
    <div className="movie-details-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <Link to="/">
          
              <div className="logo-img">
                <img src={vid} alt="" />
              </div>
              <div className="logo-span">
                <span>MovieBox</span>
              </div>
          </Link>
        </div>
        <ul className="navigation-links">
          <li>
            <Link to="/" className='flex gap-4'>
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/movies" className='flex gap-4'>
            <FontAwesomeIcon icon={faFilm} /> <span>Movies</span>
            </Link>
          </li>
          <li>
            <Link to="/series" className='flex gap-4'>
            <FontAwesomeIcon icon={faTv} /> <span>TV Series</span>
            </Link>
          </li>
          <li>
            <Link to="/upcoming" className='flex gap-4'>
            <FontAwesomeIcon icon={faCalendarAlt} /> <span>Upcoming</span>
            </Link>
          </li>
        </ul>
        <div className="logout-button">
      <Link to="/logout">
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </Link>
    </div>
      </div>

      {/* Movie Details */}
      <div className="movie-details">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
            alt={movieDetails.title}
            style={{ maxWidth: '100%', height: 'auto' }}
            data-testid="movie-poster"
          />
        </div>
        <div className="all-det">
          <div>
            <h1 className="movie-title-det" data-testid="movie-title">
              {movieDetails.title}
            </h1>
          </div>
          <div>
            <p className="movie-release-date" data-testid="movie-release-date">
              Release Date (UTC): {movieDetails.release_date}
            </p>
          </div>
          <div>
            <p className="movie-runtime" data-testid="movie-runtime">
              Runtime: {movieDetails.runtime} minutes
            </p>
          </div>
          <div>
            <p className="movie-overview" data-testid="movie-overview">
              {movieDetails.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
