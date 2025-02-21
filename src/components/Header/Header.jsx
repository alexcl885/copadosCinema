import { useContext } from "react";
import "./Header.css";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    /**
     * Now to logout , i've got AuthContext to
     * get the function of logout to put in logout label
     */

    const { logout, user } = useContext(AuthContext)

    return (
        <header className="header-cinema">
            <div className="header-logo">
                🎬 CopadosCinema
            </div>
            <nav className="header-nav-menu">
                <ul>
                    <li><Link to={"/home"}>HOME</Link></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="https://github.com/alexcl885/copadosCinema">Repository</a></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li>
                        {user.isLogged ? (
                            <Button variant="outlined" color="error" onClick={logout}>Logout</Button>
                        ) : (
                            <Button color="success" variant="contained">
                                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                            </Button>
                        )}
                    </li>


                </ul>
            </nav>
        </header>
    )
}

export default Header;
