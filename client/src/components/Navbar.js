import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setIsLoggedIn, isLoggedIn }) => {
  const [userName, setUserName] = useState("");

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("setIsLoggedIn");
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch("/api/user/info", {
          method: "GET",
          headers: {
            Authorization: accessToken,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setUserName(data.userName);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const fetchCollegeInfo = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch("/api/user/collegeinfo", {
          method: "GET",
          headers: {
            Authorization: accessToken,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setUserName(data.userName);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (isLoggedIn) {
      fetchUserInfo();
      fetchCollegeInfo();
    }
  }, [isLoggedIn]);

  return (
    <>
      <div style={{ overflow: "hidden", height: "50px" }}>
        <nav className="demo">
          <Link to="/" className="brand">
            <img className="logo" src="logo.png" alt="Logo" />
          </Link>
          <input id="bmenub" type="checkbox" className="show" />

          <label htmlFor="bmenub" className="burger pseudo button">
            Menu
          </label>

          <div className="menu">
            {isLoggedIn ? (
              <>
                <span>Welcome, {userName}</span>
                <button className="button icon-user" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="pseudo button icon-picture">
                  Login
                </Link>
                <Link to="/signup" className="button icon-puzzle">
                  Signup
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
