import { useEffect, useState } from "react";
import { createContext } from "react";
import { TOKEN_KEY } from "./AuthContext";


const MoviesContext = createContext();


const MoviesProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');



    /**
     * This arrow function delete a movie of my own API
     * @param {*} id 
     * @returns if a movie has been deleted or not
     */
    const deleteMovie = async (id) => {
        const token = localStorage.getItem(TOKEN_KEY);
        const response = await fetch(`http://localhost:3000/movies/${id}`, {
            headers: {'Authorization': `Bearer ${token}` },
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
        const token = localStorage.getItem(TOKEN_KEY);
        const response = await fetch('http://localhost:3000/movies',{
            headers: {'Authorization': `Bearer ${token}` }
        });
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
        const token = localStorage.getItem(TOKEN_KEY);
        const response = await fetch('http://localhost:3000/movies',{
            headers: {'Authorization': `Bearer ${token}` },
        });
        const apiMovies = await response.json();
        setMovies(apiMovies);
    };


    /**
     * This function show the list of movies by genre
     * @param {*} genreId 
     */
    const searchByGenre = async (genreId) => {
        const token = localStorage.getItem(TOKEN_KEY);
        try {
            const response = await fetch('http://localhost:3000/movies',{
                headers: {'Authorization': `Bearer ${token}` }
            });
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
        const token = localStorage.getItem(TOKEN_KEY);
        try {
            const response = await fetch("http://localhost:3000/movies",{
                headers: {'Authorization': `Bearer ${token}` }
            });
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
            <MoviesContext.Provider value={{movies, deleteMovie, searchByGenre, searchByPlatForm, downloadMovies, searchOneMovie ,setSearchTerm}}>
                {children}
            </MoviesContext.Provider>
        </>
    )

}

export { MoviesContext, MoviesProvider };