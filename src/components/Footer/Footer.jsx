import "./Footer.css"; // Importamos el CSS futurista

const Footer = () => {
    return (
        <footer className="footer-cinema">
            <div className="footer-content">
                <p>© 2025 CopadosCinema. All rights reserved.</p>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#">Terms and conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="https://www.linkedin.com/in/alexcl885/">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
