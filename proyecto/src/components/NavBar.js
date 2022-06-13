import CartWidget from "./CartWidget";
import "./navBar.css"
export default function NavBar() {

    return (
        <nav className="nav-main">
            <ul className="nav-list">
                <li>pagina 3</li>
                <li>pagina 2</li>
                <li>pagina 1</li>
                <CartWidget/>
            </ul>
        </nav>
    );
}

