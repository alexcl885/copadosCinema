import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMovie.css";

const AddMovie = () => {
    /**
     * controlled form:
     * image example:
     *              BATMAN
     *  poster_path: /cij4dd21v2Rk2YtUQbV5kW69WB2.jpg
     * backdrop_path: /frDS8A5vIP927KYAxTVVKRIbqZw.jpg
     */
    const navigate = useNavigate();
    const [response, setResponse] = useState("");
    const [newMovie, setNewMovie] = useState({
        "adult": false,
        "backdrop_path": "",
        "id": "",
        "original_language": "",
        "original_title": "",
        "overview": "",
        "popularity": 0,
        "poster_path": "",
        "release_date": "",
        "title": "",
        "video": false,
        "vote_average": 0,
        "vote_count": 0,
        "userId": 1
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setNewMovie({
            ...newMovie,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!newMovie.title.trim()) {
                setResponse("Error: The movie title is required.");
                return;
            }
            const token = localStorage.getItem("TOKEN");
            console.log(token);
            
            const response = await fetch("http://localhost:3000/movies", {
                method: "POST",
                headers: { "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                 },
                body: JSON.stringify(newMovie)
            });
            if (response.ok) {
                navigate("/movies");
            } else {
                setResponse("Error to create a movie");
            }
        } catch (error) {
            setResponse(`Error is ${error}`);
        }
    };

    return (
        <div className="add-movie-container">
            <h3 className="add-movie-title">Adding new Movie</h3>
            <form className="add-movie-form" onSubmit={handleSubmit}>
                <label className="add-movie-label">MOVIE +18</label>
                <input 
                    type="checkbox" 
                    name="adult" 
                    className="add-movie-checkbox" 
                    value={newMovie.adult}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">backdrop_path</label>
                <input 
                    type="text" 
                    name="backdrop_path" 
                    className="add-movie-input" 
                    value={newMovie.backdrop_path}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">id</label>
                <input 
                    type="number" 
                    name="id" 
                    className="add-movie-input" 
                    value={newMovie.id}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">original_language</label>
                <input 
                    type="text" 
                    name="original_language" 
                    className="add-movie-input" 
                    value={newMovie.original_language}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">original_title</label>
                <input 
                    type="text" 
                    name="original_title" 
                    className="add-movie-input" 
                    value={newMovie.original_title}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">overview</label>
                <input 
                    type="text" 
                    name="overview" 
                    className="add-movie-input" 
                    value={newMovie.overview}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">popularity</label>
                <input 
                    type="number" 
                    name="popularity" 
                    className="add-movie-input" 
                    value={newMovie.popularity}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">poster_path</label>
                <input 
                    type="text" 
                    name="poster_path" 
                    className="add-movie-input" 
                    value={newMovie.poster_path}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">release_date</label>
                <input 
                    type="text" 
                    name="release_date" 
                    className="add-movie-input" 
                    value={newMovie.release_date}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">title</label>
                <input 
                    type="text" 
                    name="title" 
                    className="add-movie-input" 
                    value={newMovie.title}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">video</label>
                <input 
                    type="checkbox" 
                    name="video" 
                    className="add-movie-checkbox" 
                    value={newMovie.video}
                    onChange={handleChange} />
                <label className="add-movie-label">vote_average</label>
                <input 
                    type="number" 
                    name="vote_average" 
                    className="add-movie-input" 
                    value={newMovie.vote_average}
                    onChange={handleChange} 
                />
                <label className="add-movie-label">vote_count</label>
                <input 
                    type="number" 
                    name="vote_count" 
                    className="add-movie-input" 
                    value={newMovie.vote_count}
                    onChange={handleChange} 
                />
                <button 
                    type="submit" 
                    className="add-movie-button">
                        Add
                </button>
            </form>
            {response && <p className="add-movie-response">{response}</p>}
        </div>
    );
};

export default AddMovie;