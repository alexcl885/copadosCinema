import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchMovie from './components/SearchMovie/SearchMovie';
import CheckBoxMain from './components/CheckBox/CheckBoxMain';
import ListMovies from './components/ListMovies/ListMovies';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  
  const deleteMovie = async (id) => {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
      method: 'DELETE'
    });
    if (response.status === 200) {
      downloadMovies();
    }
    return response.status === 200;
  };
  /**
   * This function search a movie. 
   * 
   */
  const searchOneMovie = async (movie) => {
    const response = await fetch('http://localhost:3000/movies');
    const apiMovies = await response.json();
    
    const filteredMovies = apiMovies.filter(mov => 
      mov.title.toLowerCase().includes(movie.toLowerCase())
    );
    setMovies(filteredMovies);
  };
  
  /**
   * --------------------------------------
  */
 /**
  * This function show the list of movies that
  * there are in my own API
 */
  const downloadMovies = async () => {
    const response = await fetch('http://localhost:3000/movies');
    const apiMovies = await response.json();
    setMovies(apiMovies);
  };


  /**
   * This function show the list of movies by genre
   * @param {*} genreId 
   */
  const searchByGenre = async (genreId) => {
    
    const response = await fetch('http://localhost:3000/genres');
    const apiMovies = await response.json();
  
    const filteredMovies = apiMovies.filter(mov => {
      console.log("Object",mov);
      
      return (
        <>
          {mov.genre_ids.includes(genreId)}
          
          
        </>
      )}
    );
    console.log(filteredMovies);
    
  
    setMovies(filteredMovies);
  };
  

  useEffect(() => {
    if (searchTerm === '') {
      downloadMovies();
    } else {
      searchOneMovie(searchTerm);
    }
  }, [searchTerm]);
  return (
    <>
      <Header /><br /><br /><br /><br />
      <SearchMovie searchMovies={searchOneMovie} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <CheckBoxMain searchByGenre={searchByGenre} />
      <ListMovies movies={movies} deleteMovie={deleteMovie} />
      <Footer />
    </>
  );
}

export default App;
