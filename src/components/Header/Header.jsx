import "./Header.css";

const Header = () => {
    return (
        <header className="cinema-header">
            <div className="logo">
                🎬 CopadosCinema
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Películas</a></li>
                    <li><a href="#">Categorías</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
