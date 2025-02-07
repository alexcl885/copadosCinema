import { useState } from "react";
import DetailMovie from "../DetailMovie/DetailMovie";
import "./ListMovies.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ListFilms = ({ movies, deleteMovie }) => {
  const [movieSelect, setMovieSelect] = useState("");

  const detailMovie = (id) => {
    let movie = movies.find(movie => movie.id == id);
    if (movieSelect.id == movie.id) {
      setMovieSelect(""); 
    } else {
      setMovieSelect(movie);
    }
  };
  const onClose = () => {
    setMovieSelect(""); 
  }

  return (
    <>
      <div className="list-movies">
        {movies.map((movie) => (
          <div key={movie.id} className="list-movies__item">
            <li><strong>Title: </strong>{movie.title}</li>
            <p><strong>Year: </strong>{movie.year}</p>
            <p><strong>Director: </strong>{movie.director}</p>
            <p><strong>Duration: </strong>{movie.duration} min</p>
            <p><strong>Rating: </strong>{movie.rating}</p>
            <img src={movie.image} alt={`Poster of ${movie.title}`} className="list-movies__image" />
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="button" value="View Movie" className="list-movies__button" onClick={() => detailMovie(movie.id)} />
              <input className="list-movies__button--danger" type="button" value="Delete" onClick={() => deleteMovie(movie.id)} />
            </div>
          </div>
        ))}
      </div>

      {movieSelect && <DetailMovie movie={movieSelect} onClose={onClose} />}
    </>
  );
};

export default ListFilms;