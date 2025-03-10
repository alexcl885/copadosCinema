import { useContext, useEffect } from "react";
import ListMovies from "../components/ListMovies/ListMovies";
import { MoviesContext } from "../context/MoviesContext";
import SearchMovie from '../components/SearchMovie/SearchMovie';
import CheckBoxMain from '../components/CheckBox/CheckBoxMain';
import { useNavigate } from "react-router-dom";

const ListMoviesPage = () => {
    const navigate = useNavigate();
    
    const { movies, deleteMovie, searchByPlatForm, searchByGenre, downloadMovies, searchOneMovie, setSearchTerm } = useContext(MoviesContext);

    useEffect(() => {
        const fetchMovies = async () => {
            const success = await downloadMovies();
            if (!success) {
                navigate("/"); 
            }
        };
        fetchMovies();
    }, [navigate, downloadMovies]);

    return ( 
        <>  
            <SearchMovie setSearchTerm={setSearchTerm} searchOneMovie={searchOneMovie} />
            <CheckBoxMain searchByGenre={searchByGenre} searchByPlatForm={searchByPlatForm} />
            <ListMovies movies={movies} deleteMovie={deleteMovie} />
        </>
    );
};
 
export default ListMoviesPage;
