import { useState, useEffect } from 'react';
import './SearchMovie.css';

const SearchMovie = ({ searchMovies, setSearchTerm, searchTerm }) => {
    return (
        <div className="search-movie-container">
            <label className="search-movie-label">Search a movie: </label>
            <input 
                type="text" 
                name="searchMovie" 
                id='textMovie'
                className="search-movie-input" 
                placeholder="name of movie..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input 
                type="button" 
                value="show" 
                className="search-movie-btn" 
                onClick={searchMovies}
            />
        </div>
    );
};

export default SearchMovie;
