import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-light sticky-top p-1-lg">
      <nav class="navbar container-fluid  navbar-expand-lg">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
