import { NavLink } from "react-router-dom"
import "./Header.css"


const Header = () => {

  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Casita
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        Acerca De
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact/Contactooo">
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}


export default Header