import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { AuthContext, TOKEN_KEY } from "./AuthContext";
import api from "../services/api";


const MoviesContext = createContext();


const MoviesProvider = ({ children }) => {

    const { user } = useContext(AuthContext);

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');



    /**
     * This arrow function delete a movie of my own API
     * @param {*} id 
     * @returns if a movie has been deleted or not
     * 
     * This function have an error i dont know the error
     */
    const deleteMovie = async (id) => {
        console.log(id);
        const response = await api.delete(`/movies/${id}`);
        
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
        
        const apiMovies = await api.get('http://localhost:3000/movies');
        

        const filteredMovies = apiMovies.data.filter(mov =>
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
    const downloadMovies = async (navigate) => {
        const apiMovies = await api.get('/movies');
            setMovies(apiMovies.data);
        
    };


    /**
     * This function show the list of movies by genre
     * @param {*} genreId 
     */
    const searchByGenre = async (genreId) => {
        try {
            const apiMovies = await api.get('http://localhost:3000/movies');
            console.log(apiMovies);
            
            // here i filter the movies that includes the genreId in genre_ids array
            const filteredMovies = apiMovies.data.filter(movie => movie.genre_ids.includes(parseInt(genreId)));

            console.log(filteredMovies);

            setMovies(filteredMovies);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    /**
     * This arrow function show the list of movies by platform
     * in this function i've had to consult IA because i have no idea 
     * to do this method
     * @param {*} platId 
     */
    const searchByPlatForm = async (platId) => {
        try {
            const apiMovies = await api.get("/movies");
            const filteredMovies = apiMovies.data.filter(movie =>
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
    }, [searchTerm, user]);


    return (
        <>
            <MoviesContext.Provider value={{movies, deleteMovie, searchByGenre, searchByPlatForm, downloadMovies, searchOneMovie ,setSearchTerm}}>
                {children}
            </MoviesContext.Provider>
        </>
    )

}

export { MoviesContext, MoviesProvider };