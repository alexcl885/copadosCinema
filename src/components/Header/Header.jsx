import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import { MoviesContext } from "../../context/MoviesContext";
import "./Header.css";

const Header = () => {
    const navigate = useNavigate(); 
    const { logout, user } = useContext(AuthContext);
    const { downloadMovies } = useContext(MoviesContext);

    return (
        <header className="header-cinema">
            <div className="header-logo">🎬 CopadosCinema</div>
            <nav className="header-nav-menu">
                <ul>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/movies" onClick={downloadMovies}>Movies</Link></li>
                    <li><a href="https://github.com/alexcl885/copadosCinema">Repository</a></li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        {user.isLogged ? (
                            <Button variant="outlined" color="error" onClick={() => logout(navigate)}>
                                Logout
                            </Button>
                        ) : (
                            <Button color="success" variant="contained">
                                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                            </Button>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
