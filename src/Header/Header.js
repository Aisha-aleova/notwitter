import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./Header.css";
import twitter from "../utils/icons/twitter.svg";
import Home from "../Pages/Home/Home";
import Korzinka from "../Pages/Korzinka/Korzinka";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";


function Header(){
    return(
        <header className="header">
            <Router>
            <nav className="nav">
                    <div className="links">
                        <NavLink className="navlink" to="/">
                        <div className="logo">
                            <figure>
                                <img src={twitter} alt="twitter" />
                            </figure>
                            <p>Not Twitter</p>
                        </div>
                        </NavLink>
                        <ul className="ul">
                            <li>
                                <NavLink to="/" className="navlink" >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Products" className="navlink" >Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Korzinka" className="navlink" >Cart</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Products" element={<Products/>}/>
                        <Route path="/Korzinka" element={<Korzinka/>}/>
                        <Route path="/About" element={<About/>}/>
                    </Routes>
            </nav>
            

            </Router>
        </header>
    )
}

export default Header;