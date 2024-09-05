import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  // Create a ref for the navbar collapse div
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the navbar
    const handleClickOutside = (event) => {
      if (
        navbarCollapseRef.current &&
        !navbarCollapseRef.current.contains(event.target)
      ) {
        // Close the collapse if it's open
        const collapseElement = document.getElementById("navbarNav");
        if (collapseElement.classList.contains("show")) {
          collapseElement.classList.remove("show");
        }
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent the default form submission
    window.location.href = "mailto:frebson.ivs@gmail.com";
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={`${process.env.PUBLIC_URL}/images/frebson2-logo.png`} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                aria-current={pathname === "/" ? "page" : undefined}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/terms" ? "active" : ""}`}
                to="/terms"
              >
                Terms of Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/policy" ? "active" : ""}`}
                to="/policy"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>

          <form className="d-flex ms-auto">
            <button onClick={handleContactClick} className="nav-btn" type="submit">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
