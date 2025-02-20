# 🎬 CopadosCinema Project

## 🚀 Project Overview
This project, created during the 2nd year of the DAM module, is a **React-based movie listing application**. The goal is to develop a web app using `React` + `Vite` to manage a movie catalog efficiently. Through this project, I aim to gain hands-on experience in component creation and state management.

The backend is powered by **json-server**, providing a rapid prototype API with preloaded data, ensuring seamless testing and development.

## 🌟 Features
# First Version
### 1️⃣ Backend Configuration
- Utilizes **json-server** to simulate a backend API.
- Stores information about **movies, genres, and streaming platforms**.
- Comes with preloaded data for quick setup and testing.

---

### 2️⃣ Movie Listing Component
- Displays all available movies in an elegant grid layout.
- Shows **title, cover image, platforms, price**, and a **shortened description (first 100 characters followed by `...`)**.
- Features **hover effects** for better user interaction.

Code:
```jsx
return (
    <>
      <div className="list-movies">
        {movies.map((movie) => (
          <div key={movie.id} className="list-movies__item">
            <li><strong>Title: </strong>{movie.title}</li>
            <p><strong>Release Date: </strong>{movie.release_date}</p>
            <p><strong>Rating: </strong>{movie.vote_average}</p>
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={`Poster of ${movie.title}`} 
              className="list-movies__image" 
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="button" value="View Movie" onClick={() => detailMovie(movie.id)} className="list-movies__button" />
              <input className="list-movies__button--danger" type="button" value="Delete" onClick={() => deleteMovie(movie.id)} />
            </div>
          </div>
        ))}
      </div>
      {movieSelect && <DetailMovie movie={movieSelect} onClose={onClose} />}
    </>
  );
```
---

### 3️⃣ Genre Filter Menu
- Interactive **checkbox menu** for filtering movies by genre.
- By default, all genres are selected.
- Dynamically updates the movie list based on selected genres.

Code:
```js
const searchByGenre = async (genreId) => {
    try {
        const response = await fetch('http://localhost:3000/movies'); 
        const apiMovies = await response.json();

        // here i filter the movies that includes the genreId in genre_ids array
        const filteredMovies = apiMovies.filter(movie => movie.genre_ids.includes(parseInt(genreId)));

        console.log(filteredMovies);

        setMovies(filteredMovies);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
  };
```
---

### 4️⃣ Platform Filter Menu
- Similar to the genre filter but for **streaming platforms**.
- Displays only movies available on the selected platforms.

Code:
```js
const searchByPlatForm = async (platId) => {
    try {
        const response = await fetch("http://localhost:3000/movies"); 
        const data = await response.json();
        
        const filteredMovies = data.filter(movie => 
            Array.isArray(movie.platform) && movie.platform.includes(parseInt(platId))
        );

        setMovies(filteredMovies);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
  };
```
---

### 5️⃣ Search Box
- Located below the movie list for easy access.
- Allows users to **search by title or description**.
- Filters only movies that match the search term **AND** belong to selected genres.
- Features a **real-time search experience**.

Code:
```js
const searchOneMovie = async (movie) => {
    const response = await fetch('http://localhost:3000/movies');
    const apiMovies = await response.json();
    
    const filteredMovies = apiMovies.filter(mov => 
      mov.title.toLowerCase().includes(movie.toLowerCase())
    );
    setMovies(filteredMovies);
  };
```

---

### 6️⃣ Movie Detail View
- When a user selects a movie, a **stylish modal box** appears.
- Displays **all details** of the selected movie, including a high-quality cover image.
- Initially, this view appears below the movie list with a button to toggle visibility.
- Later, it is transformed into a **fully animated CSS-based modal window**.

Code:
```jsx
import React from "react";
import "./DetailMovie.css";

const DetailMovie = ({ movie, onClose }) => {
    return (
        <>
            <div className="detail-movie-overlay" onClick={onClose}></div>
            <div className="detail-movie-dialog">
                <h5>{movie.title}</h5>
                <p><strong>Popularity: </strong>{movie.popularity}</p>
                <p><strong>Original Language: </strong>{movie.original_language}</p>
                <p><strong>+18: </strong> {movie.adult ? "Yes" : "No"}</p>
                <p><strong>Overview: </strong>{movie.overview}</p>
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                    alt={`Poster of ${movie.title}`} 
                    className="list-movies__image" 
                />

                <input type="button" value="Back" onClick={onClose} />
            </div>
        </>
    );
};

export default DetailMovie;

```
---

### 7️⃣ Delete Movie Feature
- Inside the movie detail view, a **delete button** allows users to remove a movie from the backend.
- Includes a confirmation prompt to prevent accidental deletions.

Code:
```js
/**
   * This arrow function delete a movie of my own API
   * @param {*} id 
   * @returns if a movie has been deleted or not
   */
  const deleteMovie = async (id) => {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
      method: 'DELETE'
    });
    if (response.status === 200) {
      downloadMovies();
    }
    return response.status === 200;
  };
```
---


## IN THIS VERSION (jwt)

Now i've installed a new dependencias to can execute this proyect

```bash
npm install express
npm install react-router-dom
npm install json-server-auth
```













## 🛠️ Technologies Used
- **React + Vite** → For a fast and optimized frontend experience.
- **json-server** → For simulating a backend API with test data.
- **CSS (Modern UI Design)** → Implementing a futuristic theme with **neon colors, smooth animations, and dark mode compatibility**.

---

## 🔮 Future Improvements
- **User Authentication** → Allow users to create accounts and manage their watchlists.
- **Movie Reviews & Ratings** → Users can leave reviews and ratings to enhance engagement.
- **Dark Mode Toggle** → Seamless theme switching between light and dark mode.
- **Real API Integration** → Upgrade from `json-server` to a full-fledged backend solution.

---

## 👨‍💻 Author
Developed with passion by **Alejandro Copado López**. 🎥🍿

