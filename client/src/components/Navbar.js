import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div style={{ overflow: "hidden", height: "50px" }}>
        <nav className="demo">
          <Link to="/" className="brand">
            <img className="logo" src="logo.png" />
          </Link>
          <input id="bmenub" type="checkbox" className="show" />

          <label htmlFor="bmenub" className="burger pseudo button">
            Menu
          </label>

          <div className="menu">
            <Link to="/login" className="pseudo button icon-picture">
              Login
            </Link>
            <Link to="/signup" className="button icon-puzzle">
              Signup
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;