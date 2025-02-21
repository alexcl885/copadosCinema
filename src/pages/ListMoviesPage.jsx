import { useContext } from "react";
import ListMovies from "../components/ListMovies/ListMovies";
import { MoviesContext } from "../context/MoviesContext";
import SearchMovie from '../components/SearchMovie/SearchMovie'
import CheckBoxMain from '../components/CheckBox/CheckBoxMain'
const ListMoviesPage = () => {

    const {movies, deleteMovie, searchByPlatForm, searchByGenre, downloadMovies, searchOneMovie, setSearchTerm} = useContext(MoviesContext)


    return ( 
        <>  
            {/**list of movies */}
            <SearchMovie setSearchTerm={setSearchTerm} searchOneMovie={searchOneMovie}></SearchMovie>
            <CheckBoxMain searchByGenre={searchByGenre} searchByPlatForm={searchByPlatForm}></CheckBoxMain>
            <ListMovies movies={movies} deleteMovie={deleteMovie}/>
        </>
     );
}
 
export default ListMoviesPage;