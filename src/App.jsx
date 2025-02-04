import { useEffect, useState } from 'react';

import ListFilms from './components/ListMovies/ListMovies';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchMovie from './components/SearchMovie/SearchMovie';
import CheckBoxMain from './components/CheckBox/CheckBoxMain';

function App() {
  const [movies, setMovies] = useState([]); 
  
  /**
   * This function search a movie. 
   * if text is empty , it will show the list of movies
   * but if the text have the name of any movie , it will show 
   * this movie.(if the names of movies having the same title)
   */
  const searchMovies = () => {
    let movieText = document.getElementById('textMovie').value;
    if (movieText == ''){
      downloadMovies();
    }
    else {
      searchOneMovie(movieText);        
    }
  }

  const searchOneMovie = async (movie) => {
    const response = await fetch('http://localhost:3000/movies');
    const apiMovies = await response.json();

    const filteredMovies = apiMovies.filter(mov => 
      mov.title.toLowerCase() === movie.toLowerCase()
    );
    setMovies(filteredMovies);
    
  }
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
  }

  useEffect(() => {
    searchMovies();
  }, []); 

  return (
    <>
      <Header/>
      <SearchMovie searchMovies={searchMovies}/><CheckBoxMain/>
      <ListFilms movies={movies} />
      <Footer/>
    </>
  );
}

export default App;
