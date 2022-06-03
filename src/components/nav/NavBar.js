import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navBar_item active">
                <Link className="navBar__link" to="/Locations" >Locations</Link>
               </li>

               <li className="navBar_item active">
                <Link className="navBar__link navbar__products" to="/Products" >Products</Link>
               </li>

            {<li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li> }
        </ul>
    )
}

