import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchMovie from './components/SearchMovie/SearchMovie';
import CheckBoxMain from './components/CheckBox/CheckBoxMain';
import ListMovies from './components/ListMovies/ListMovies';
import HomePage from './pages/HomePage';
import Home from './components/Home/Home';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



  /**
   * This arrow function delete a movie of my own API
   * @param {*} id 
   * @returns if a movie has been deleted or not
   */
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
    try {
        const response = await fetch('http://localhost:3000/movies'); 
        const apiMovies = await response.json();

        // here i filter the movies that includes the genreId in genre_ids array
        const filteredMovies = apiMovies.filter(movie => movie.genre_ids.includes(parseInt(genreId)));

        console.log(filteredMovies);

        setMovies(filteredMovies);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
  };

  /**
   * This arrow function show the list of movies by platform
   * @param {*} platId 
   */
  const searchByPlatForm = async (platId) => {
    try {
        const response = await fetch("http://localhost:3000/movies"); 
        const data = await response.json();
        
        const filteredMovies = data.filter(movie => 
            Array.isArray(movie.platform) && movie.platform.includes(parseInt(platId))
        );

        setMovies(filteredMovies);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
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
      {/**<Home></Home> (when i have router)*/}
      <SearchMovie searchMovies={searchOneMovie} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <CheckBoxMain searchByGenre={searchByGenre} searchByPlatForm={searchByPlatForm} />
      <ListMovies movies={movies} deleteMovie={deleteMovie} />
      <Footer />
    </>
  );
}

export default App;
