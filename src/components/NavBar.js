import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (<div>
    <ul>
      <li><NavLink to="/" className="navbar">Home</NavLink></li>
      <li><NavLink to="/movies" className="navbar">Movies</NavLink></li>
      <li><NavLink to="/directors" className="navbar">Directors</NavLink></li>
      <li><NavLink to="/actors" className="navbar">Actors</NavLink></li>
    </ul>
  </div>);
}

export default NavBar;
