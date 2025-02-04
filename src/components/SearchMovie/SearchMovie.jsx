import './SearchMovie.css';

const SearchMovie = ({searchMovies}) => {


    return (
        <div className="search-movie-container">
            <label className="search-movie-label">Search a movie: </label>
            <input 
                type="text" 
                name="searchMovie" 
                id='textMovie'
                className="search-movie-input" 
                placeholder="name of movie..." 
            />
            <input 
                type="button" 
                value="show" 
                className="search-movie-btn" 
                onClick={searchMovies}
            />
        </div>
    )
}

export default SearchMovie;
