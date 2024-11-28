import logo from "../assets/Logo Mietis.png";
import search from "../assets/Search icon.svg";
import cart from "../assets/cart icon.svg";
import heart from "../assets/hearticon 1.svg";
import hamburger from "../assets/hamburger.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <nav className="navbar-container">
      <NavLink to={"/"}>
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className="icons">
        <li className="search-icon">
          <img src={search} alt="search-icon" onClick={()=>{setHidden(!hidden)}}/>
        </li>
        <li>
          <img src={cart} alt="cart-icon" onClick={()=>{setHidden(!hidden)}}/>
        </li>
        <li>
          <img src={heart} alt="heart-icon" onClick={()=>{setHidden(!hidden)}} />
        </li>
        <li>
          <img src={hamburger} alt="hamburger-icon" onClick={()=>{setHidden(!hidden)}}/>
        </li>
      </ul>
      <div className={`pop-up ${!hidden ? " " : "show"}`}>
        <h2>SECTION OUT OF THE MVP</h2>
        <button className="btn" onClick={()=>{setHidden(!hidden)}}>Go back</button>
      </div>
    </nav>
  );
};

export default Navbar;
