import { useContext, useEffect } from "react";
import AddMovie from "../components/AddMovie/AddMovie";
import { MoviesContext } from "../context/MoviesContext";
import { useNavigate } from "react-router-dom";

const AddMoviePage = () => {
    const navigate = useNavigate();
    const { movies, deleteMovie, searchByPlatForm, searchByGenre, downloadMovies, searchOneMovie, setSearchTerm } = useContext(MoviesContext);

    /**
     * This code is becouse if user is not logged 
     * the page navigate to login.
     */
    useEffect(() => {
            const fetchMovies = async () => {
                const success = await downloadMovies();
                if (!success) {
                    navigate("/"); 
                }
            };
            fetchMovies();
    }, []);

    return ( 
        <>
            <AddMovie></AddMovie>
        </>
     );
}
 
export default AddMoviePage;