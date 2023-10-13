import { Link } from "react-router-dom";

const Menu = () => (
    <nav className="Menu">
        <Link to="/" className="menu-button">
            <button>Catálogo de Libros</button></Link>
        <Link to="/acerca-de" className="menu-button"><button>Acerca de</button></Link>
        <br></br>
    </nav>
);
export default Menu;

