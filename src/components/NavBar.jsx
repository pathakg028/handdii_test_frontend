import React from "react";

const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="false" className="navbar-brand">
        Handdii
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent" />
    </nav>
  </div>
);
export default NavBar;
