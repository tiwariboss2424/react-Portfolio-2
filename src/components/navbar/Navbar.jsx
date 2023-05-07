import React from "react";
import "./Navbar.css";
import "../../styles.css";
const Navbar = () => {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left-top">
          <div className="n-logo">React</div>
          <span>Toggle</span>
        </div>

        <div className="n-right-top">
          <div className="n-list">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Experience</li>
              <li>Portfolio</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <button className="buttons n-button">Contact</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
