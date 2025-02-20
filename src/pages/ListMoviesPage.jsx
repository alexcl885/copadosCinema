import ListMovies from "../components/ListMovies/ListMovies";

const ListMoviesPage = () => {
    return ( 
        <>  
            {/**list of movies */}
            <ListMovies movies={movies} deleteMovie={deleteMovie}/>
        </>
     );
}
 
export default ListMoviesPage;