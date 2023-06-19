import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // function myFunction() {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg Topnav "
            id="myTopnav"
          >
            <Link to="/" className="navbar-brand logo">WHIPMODE</Link>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            onClick={functionNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            
            <div className="Topnav top-menu mobile-menu-link mobile-nav" id="myTopnav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/howItWork" className="nav-link ">How It Works</Link>
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
            {/* respo nav bar  */}
          </nav>
        </div>
      </header>


    </>
  );
};

export default Header;
