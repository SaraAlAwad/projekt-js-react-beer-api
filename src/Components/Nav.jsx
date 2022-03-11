import { Link } from "react-router-dom"
import logo from "../imgs/Logo.png"

const Nav = () => {
    return (
        <nav>
            <Link to="/home"> <img src={logo} alt="logo" /></Link>
        </nav>
    )
}

export default Nav