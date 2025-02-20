import { useState } from "react";
import DetailMovie from "../DetailMovie/DetailMovie";
import "./ListMovies.css";


const ListMovies = ({ movies, deleteMovie }) => {
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
            <p><strong>Release Date: </strong>{movie.release_date}</p>
            <p><strong>Rating: </strong>{movie.vote_average}</p>
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={`Poster of ${movie.title}`} 
              className="list-movies__image" 
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="button" value="View Movie" onClick={() => detailMovie(movie.id)} className="list-movies__button" />
              <input className="list-movies__button--danger" type="button" value="Delete" onClick={() => deleteMovie(movie.id)} />
            </div>
          </div>
        ))}
      </div>
      {movieSelect && <DetailMovie movie={movieSelect} onClose={onClose} />}
    </>
  );
};

export default ListMovies;