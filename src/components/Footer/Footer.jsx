import "./Footer.css"; // Importamos el CSS específico del footer

const Footer = () => {
    return (
        <footer className="cinema-footer">
            <div className="footer-content">
                <p>© 2025 CopadosCinema. Todos los derechos reservados.</p>
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#">Términos y condiciones</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
