import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import { AuthContext, TOKEN_KEY } from "../../context/AuthContext";
import { MoviesContext } from "../../context/MoviesContext";
import "./Header.css";
import { deepPurple } from "@mui/material/colors";

const Header = () => {
    const navigate = useNavigate(); 
    const { logout } = useContext(AuthContext);

    /**
     * If token != null ; this want to say that
     * the user is register but token == null ; this
     * want to say that the user is not register
     */
    const token = localStorage.getItem(TOKEN_KEY)
    
    

    return (
        <header className="header-cinema">
            <div className="header-logo">🎬 CopadosCinema</div>
            
            <nav className="header-nav-menu">
                <ul>
                    <li><Link to="/home">HOME</Link></li>

                    {token && (
                        <li>
                            <Link to="/movies" >
                                Movies
                            </Link>
                            <Link to="/movies/add" >
                                Add Movie
                            </Link>
                        </li>
                        
                    )}

                    <li><Link to="/about">About</Link></li>
                    <li><a href="https://github.com/alexcl885/copadosCinema">Repository</a></li>

                    {token ? (
                        <li className="profile-container-header">
                            <Link to="/profile">
                                <Avatar sx={{ bgcolor: deepPurple[500] }}>
                                    
                                </Avatar>
                            </Link>

                            <Button variant="outlined" color="error" onClick={() => logout(navigate)}>
                                Logout
                            </Button>
                        </li>
                    ) : (
                        <li>
                            <Button color="success" variant="contained">
                                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                            </Button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
