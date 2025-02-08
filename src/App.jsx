import { useEffect, useState } from 'react';
import './App.css'
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

  /**
   * This function should delete a movie but how i ve got a movie API 
   * i cant delete because i havent permision of this.
   */
  const deleteMovie = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=TU_API_KEY`, {
      method: 'DELETE'
    })
    if (response.status === 200) {
      downloadMovies();
    }
    return response.status === 200;
  }

  const searchOneMovie = async (movie) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d4aee571c84637243d4d7e749415d1e2&query=${movie}`);
    const data = await response.json();
    setMovies(data.results);  
  };
  
/**
 * --------------------------------------
 */
  /**
   * This function show the list of movies that
   * there are in my own API
   */
  const downloadMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d4aee571c84637243d4d7e749415d1e2');
    const data = await response.json();
    setMovies(data.results);  
  };
  

  useEffect(() => {
    searchMovies();
  }, []); 

  return (
    <>
      <Header/><br/><br/><br/><br/>
      <SearchMovie searchMovies={searchMovies}/>
      <CheckBoxMain/>
      <ListFilms movies={movies} deleteMovie={deleteMovie}/>
      <Footer/>
    </>
  );
}

export default App;
