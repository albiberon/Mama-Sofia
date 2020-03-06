import React from "react";
import logo from "../../src/mamasofia-logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} width="290" height="50" alt="Recette logo"/>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item active">
        <Link to="/mission" className="nav-link">Our mission</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Recipes
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/recipes" className="dropdown-item">All Recipes</Link>
          <div className="dropdown-divider"></div>
          <Link to="/breakfast" className="dropdown-item">Breakfast</Link>
          <div className="dropdown-divider"></div>
          <Link to="/lunch" className="dropdown-item">Lunch</Link>
          <div className="dropdown-divider"></div>
          <Link to="/dinner" className="dropdown-item">Dinner</Link>
        </div>
      </li>
    </ul>


    <div className ="my-2 my-lg-0" id="navbar-icons-right">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#"><svg class="bi bi-search" width="1.5em" height="1.5em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
</svg></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" ole="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg className="icon bi bi-person" width="1.7em" height="1.7em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15 16s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002zM5.022 15h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C13.516 12.68 12.289 12 10 12c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002zM10 9a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>
</svg></a>
<div className="dropdown-menu" id="person-dropdown" aria-labelledby="dropdownMenuLink">
    <Link to="/login" className="dropdown-item">Log in</Link>
    <div className="dropdown-divider"></div>
    <Link to="/signup" className="dropdown-item">Sign up</Link>
  </div>
      </li>
      <li className="nav-item">
        <Link to="/submit" className="nav-link"><svg className="bi bi-pen" width="1.7em" height="1.7em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7.707 15.707a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391L12.086 4.5a2 2 0 012.828 0l.586.586a2 2 0 010 2.828l-7.793 7.793zM5 13l7.793-7.793a1 1 0 011.414 0l.586.586a1 1 0 010 1.414L7 15l-3 1 1-3z" clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M11.854 4.56a.5.5 0 00-.708 0L7.854 7.855a.5.5 0 11-.708-.708l3.293-3.292a1.5 1.5 0 012.122 0l.293.292a.5.5 0 11-.708.708l-.292-.293z" clip-rule="evenodd"/>
            <path d="M15.293 3.207a1 1 0 011.414 0l.03.03a1 1 0 01.03 1.383L15.5 6 14 4.5l1.293-1.293z"/>
          </svg>
        </Link>
      </li>
    </ul>

    </div>
  </div>

    </nav>

};

export default Navbar;