
{/**This component list all kind of movies */}
const ListFilms = ({movies}) => {
 
    return (
        <>
            {
                movies.map((movie, index) =>{ 
                    return(
                        <ul key={index}>
                            <li><strong>Title: </strong>{movie.title}</li>
                            <p><strong>Year: </strong>{movie.year}</p>
                            <p><strong>Director: </strong>{movie.director}</p>
                            <p><strong>Duration: </strong>{movie.duration}</p>
                            <p><strong>Rating: </strong>{movie.rating}</p>  
                        </ul>
                    )
                })
            }
        </>
    )
}

export default ListFilms;