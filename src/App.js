import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Updated Route */}
        <Route path="/movies/:id" element={<MovieDetails />} /> {/* Updated Route */}
      </Routes>
    </Router>
  );
}

export default App;
