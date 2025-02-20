import "./Header.css";

const Header = () => {
    return (
        <header className="header-cinema">
            <div className="header-logo">
                🎬 CopadosCinema
            </div>
            <nav className="header-nav-menu">
                <ul>
                    <li><a href="/home">Inicio</a></li>
                    <li><a href="#">Películas</a></li>
                    <li><a href="#">Categorías</a></li>
                    <li><a href="https://github.com/alexcl885/copadosCinema">Repositorio</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
