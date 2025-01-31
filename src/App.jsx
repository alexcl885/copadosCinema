import { useEffect, useState } from 'react';

import ListFilms from './components/ListFilms/ListFilms';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [movies, setMovies] = useState([]); 

  const downloadMovies = async () => {
    const response = await fetch('http://localhost:3000/movies');
    const apiMovies = await response.json();
    setMovies(apiMovies);
}

  useEffect(() => {
    downloadMovies();
  }, []); 

  return (
    <>
      <Header></Header>
      <ListFilms movies={movies} />
      <Footer></Footer>
    </>
  );
}

export default App;
