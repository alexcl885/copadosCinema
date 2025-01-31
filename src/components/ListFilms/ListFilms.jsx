{/**This component lists all kinds of movies */}
import "./ListFilms.css";

const ListFilms = ({ movies }) => {
  return (
    <div className="list-films">
      {movies.map((movie, index) => {
        return (
          <ul key={index} className="list-films__item">
            <li><strong>Title: </strong>{movie.title}</li>
            <p><strong>Year: </strong>{movie.year}</p>
            <p><strong>Director: </strong>{movie.director}</p>
            <p><strong>Duration: </strong>{movie.duration} min</p>
            <p><strong>Rating: </strong>{movie.rating}</p>  
            <img src={movie.image} alt="Movie poster" className="list-films__image" />
          </ul>
        );
      })}
    </div>
  );
};

export default ListFilms;
