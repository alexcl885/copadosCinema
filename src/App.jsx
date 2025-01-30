import { useEffect, useState } from 'react';

import ListFilms from './components/ListFilms';

function App() {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3000/movies');
        const allMovies = await response.json();
        setMovies(allMovies); 
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies(); 
  }, []); 

  return (
    <>
      <ListFilms movies={movies} />
    </>
  );
}

export default App;
