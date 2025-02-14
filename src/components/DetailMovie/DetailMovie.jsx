import React from "react";
import "./DetailMovie.css";

const DetailMovie = ({ movie, onClose }) => {
    return (
        <>
            <div className="detail-movie-overlay" onClick={onClose}></div>
            <div className="detail-movie-dialog">
                <h5>{movie.title}</h5>
                <p><strong>Popularity: </strong>{movie.popularity}</p>
                <p><strong>Original Language: </strong>{movie.original_language}</p>
                <p><strong>+18: </strong> {movie.adult ? "Yes" : "No"}</p>
                <p><strong>Overview: </strong>{movie.overview}</p>
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                    alt={`Poster of ${movie.title}`} 
                    className="list-movies__image" 
                />

                <input type="button" value="Back" onClick={onClose} />
            </div>
        </>
    );
};

export default DetailMovie;
