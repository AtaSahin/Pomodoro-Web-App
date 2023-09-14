import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="siteLogo">
        Pomodoro App
      </a>
      <ul>
        <li>
          <Link to="/loginpage">
            {" "}
            {/* Correct the path here */}
            <a href="/" className="loginClick">
              Login
            </a>
          </Link>
        </li>
        <li>
          <p>test</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
