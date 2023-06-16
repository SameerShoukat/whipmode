import React from "react";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instra from "../assets/images/instra.svg";
import locationwhite from "../assets/images/locaction-white.svg";
import whitephone from "../assets/images/instra.svg";
import email from "../assets/images/mail.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12 mb-lg-0 mb-3">
              <div className="footer-logo-sec">
                <Link to="/">
                  <h3 className="logo-white">WHIPMODE</h3>
                </Link>
                <p className="sub-para-white">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore. magna
                  aliquyam erat, sed diam
                </p>
                <div className="footer-social-link">
                  <a href="">
                    <img src={facebook} alt="image" />
                  </a>
                  <a href="">
                    <img src={twitter} alt="image" />
                  </a>
                  <a href="">
                    <img src={instra} alt="image" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-12 p-lg-0 mt-lg-0 pt-lg-0 pt-3">
              <div className="foot-nav">
                <Link to="/">
                  <h3 className="foot-heading">WHIPMODE</h3>
                </Link>
                <ul>
                  <li>
                    <Link to="/howItWork" className="foot-links-text">
                      How It Works
                    </Link>
                  </li>
                  <li>
                      <Link to="/Pricing" className="foot-links-text">Pricing</Link>
                  </li>
                  <li>
                     <Link to="/Helping" className="foot-links-text">Help</Link>
                  </li>
                  <li>
                    <a href="javascript:;" >
                      <Link to="/Signin" className="foot-links-text">Sign In</Link>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" >
                      <Link to="/signup" className="foot-links-text">Join</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-12 p-lg-0 mt-lg-0 pt-lg-0 pt-3">
              <div className="foot-nav">
                <h3 className="foot-heading">Contact Info</h3>
                <ul>
                  <li>
                    <a href="javascript:;" className="foot-links-text lh-sm">
                      <span>
                        <img src={locationwhite} alt="image" />
                      </span>
                      Lorem ipsum dolor sit amet, consetetur
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className="foot-links-text">
                      <span>
                        <img src={whitephone} alt="image" />
                      </span>
                      415 203 6778
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className="foot-links-text">
                      <span>
                        <img src={email} alt="image" />
                      </span>
                      Info@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-12 p-lg-0 mt-lg-0 pt-lg-0 pt-3">
              <div className="foot-form">
                <h3 className="foot-heading">Newsletter</h3>
                <form>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="footinput"
                  />
                  <button className="bdr-btn-white w-100">Send</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row pt-lg-2 pt-2 justify-content-center">
            <div className="col-md-4 col-12">
              <div className="foot-copy-rigt text-center">
                <p className="foot-links-text">
                  All Rights Reserved © 2023, WHIPMODE
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
