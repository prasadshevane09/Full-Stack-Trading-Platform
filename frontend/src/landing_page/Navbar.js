import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
      <nav className="navbar navbar-expand-lg border-bottom" styles={{ backgroundColor: "#FFF", top:"0"}}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="Logo" style={{width:"25%"}}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/signup">
                Login
                </Link>
              </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
