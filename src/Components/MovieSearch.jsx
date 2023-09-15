import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './../css/MovieSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function MovieSearch() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = 'e04aef010dc35386aca0e4a9887b0bdb';

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);

    // Check if the query is not empty before making the API request
    if (query.trim() !== '') {
      // Perform the API request for movie search here
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

      fetch(searchUrl)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } else {
      // If query is empty, clear search results
      setSearchResults([]);
      setLoading(false);
    }
  };

  return (
    <div className="movie-search-container">
      
      <div className="search-input-container">
        <input
          type="text"
          placeholder="what Do You Want To Watch"
          value={query}
          onChange={handleInputChange}
        className='search-input'
        />
        <button onClick={handleSearch} disabled={loading}>
        <FontAwesomeIcon icon={faSearch} style={{ color: '#ffffff' }}/>
        </button>
      </div>

      {searchResults.length > 0 && !loading && (
        <div className="movie-grid">
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      {loading && <p className='text-8xl text-center font-bold'>Loading...</p>}
    </div>
  );
}

export default MovieSearch;
