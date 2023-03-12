import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" sticky-top p-sm-0 px-2 bg-light-subtle">
      <nav className="navbar container  navbar-expand-md ">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <Link to="/premerLeag" className="nav-item  nav-link active">
                PremerLeag
              </Link>
              <Link to="/LaLiga" className="nav-item  nav-link active">
                LaLiga
              </Link>
              <Link to="/Bundesliga" className="nav-item  nav-link active">
                Bundesliga
              </Link>
              <Link to="/Seria_A" className="nav-item  nav-link active">
                Seria A
              </Link>
              <Link to="/Ligue_1" className="nav-item  nav-link active">
                Ligue 1
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
