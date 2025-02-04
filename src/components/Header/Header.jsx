import "./Header.css";

const Header = () => {
    return (
        <header className="cinema-header">
            <div className="logo">
                🎬 CopadosCinema
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">Platform</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
