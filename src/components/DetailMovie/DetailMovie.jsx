import React from "react";
import "./DetailMovie.css";

const DetailMovie = ({ movie, onClose }) => {
    return (
        <>
            <div className="detail-movie-overlay" onClick={onClose}></div>
            <div className="detail-movie-dialog">
                <h5>{movie.title}</h5>
                <p><strong>Popularity: </strong>{movie.popularity}</p>
                

                <input type="button" value="Back" onClick={onClose} />
            </div>
        </>
    );
};

export default DetailMovie;
