import React from "react";
import "./DetailMovie.css";

const DetailMovie = ({ movie, onClose }) => {
    return (
        <>
            <div className="detail-movie-overlay" onClick={onClose}></div>
            <div className="detail-movie-dialog">
                <h5>{movie.title}</h5>
                <p><strong>Year: </strong>{movie.year}</p>
                <p><strong>Director: </strong>{movie.director}</p>
                <p><strong>Duration: </strong>{movie.duration} min</p>
                <p><strong>Rating: </strong>{movie.rating}</p>
                <p><strong>Actors: </strong></p>
                <ul>
                {movie.actors.map((actor, index) => (
                    <li key={index}>{actor}</li>
                ))}
                </ul>

                <input type="button" value="Back" onClick={onClose} />
            </div>
        </>
    );
};

export default DetailMovie;
