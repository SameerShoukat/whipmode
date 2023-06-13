import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
              <Link to="/" className="navbar-brand logo">WHIPMODE</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/howItWork" className="nav-link ">HowitsWorkpage</Link>
                </li>
                <li className="nav-item">
                    <Link to="/pricing" className="nav-link">Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link to="/helping" className="nav-link">Helping</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signin" className="nav-link">Sign In</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">Join</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

  
    </>
  );
};

export default Header;
