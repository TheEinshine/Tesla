import React from "react";
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <nav className="HeadingNav">
        <p>
          Up to $1 tax credit available for Model Y and Model 3.{" "}
          <a href="">Learn More</a>
        </p>
      </nav>
      <nav className="navbarMenu">
        <div className="leftNav">
          <img
            className="teslaLogo"
            src="https://i.ibb.co/q5Z1MTZ/oie-9p-WOJQO8-Z9-Pc-removebg-preview.png"
            alt="Tesla Logo"
          />
        </div>
        <div className="centerNav">
          <ul>
            <li>
              <a href="">Model S</a>
            </li>
            <li>
              <a href="">Model 3</a>
            </li>
            <li>
              <a href="">Model X</a>
            </li>
            <li>
              <a href="">Model Y</a>
            </li>
            <li>
              <a href="">Solar Roof</a>
            </li>
            <li>
              <a href="">Solar Panels</a>
            </li>
            <li>
              <a href="">Powerwall</a>
            </li>
          </ul>
        </div>
        <div className="rightNav">
          <ul>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
