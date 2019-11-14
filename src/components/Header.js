import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
  const active = {color: "blue"};
  return (
    <header>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink activeStyle = {active} exact className="nav-item nav-link" to="/">Home</NavLink>
        <NavLink activeStyle = {active} className="nav-item nav-link" to="/next">Features</NavLink>
        <a className="nav-item nav-link" href="#">Pricing</a>
        <a className="nav-item nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </nav>
  </header>
  )
}

export default Header;
