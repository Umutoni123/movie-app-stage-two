import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import MovieSearch from "./MovieSearch";
import "./../css/card.css";
import "./../css/HomePage.css";
import vid from "../img/tv.png";

import menu from "../img/Menu.png";

function HomePage() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    // Fetch top-rated movies from the API
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=e04aef010dc35386aca0e4a9887b0bdb"
      )
      .then((response) => {
        setTopMovies(response.data.results.slice(0, 10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="home-page1">
        <div className="header">
          <nav className="navigation">
            {/* Logo */}
            <div className="logo">
              <div className="logo-img">
                <img src={vid} alt="" />
              </div>
              <div className="logo-span">
                <span>MovieBox</span>
              </div>
            </div>
            {/* Search Bar */}
            <div className="search-bar">
              <MovieSearch />
            </div>
            {/* Sign-in Form */}
            <div className="sign-in-form">
              {/* Your sign-in form goes here */}
              <span>Sign in</span>
              <img src={menu} alt="" />
            </div>
          </nav>
        </div>
        <div className="movie-infos">
          <div className="movie-info">
            {/* Movie Title */}
            <div className="movie-title">
              <h1>
                John Wick 3 : <br />
                Parabellum
              </h1>
            </div>
            {/* Description */}
            <div className="movie-description">
              <p>
                John Wick is on the run after killing a member <br /> of the
                international assassins' guild, and with <br /> a $14 million
                price tag on his head, he is the <br /> target of hit men and
                women everywhere.
              </p>
            </div>
            {/* Watch Video Button */}
            <button href="#" className="watch-video-button">
              <img src={vid} id="watch-video-button" alt="" />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="home-page">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
