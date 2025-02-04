import "./Header.css";

const Header = () => {
    return (
        <header className="cinema-header">
            <div className="logo">
                🎬 CopadosCinema
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="http://localhost:5173/">Inicio</a></li>
                    <li><a href="#">Películas</a></li>
                    <li><a href="#">Categorías</a></li>
                    <li><a href="https://github.com/alexcl885/copadosCinema">Repositorio</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
