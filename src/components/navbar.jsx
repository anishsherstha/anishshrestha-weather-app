import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ theme, toggleTheme }) {

  return (
    <nav className="navbar">

      {/* LOGO */}

      <Link to="/" className="navbar-logo">
        🌤️ WeatherNow
      </Link>


      {/* NAVIGATION */}

      <ul className="navbar-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about">
            About
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

      </ul>


      {/* DARK / LIGHT TOGGLE */}

      <div className="theme-area">

        <span className="theme-label">
          {theme === "light" ? "☀️ Light" : "🌙 Dark"}
        </span>

        <button
          type="button"
          className={`switch ${theme === "dark" ? "switch-on" : ""}`}
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >

          <span className="switch-circle"></span>

        </button>

      </div>

    </nav>
  );
}

export default Navbar;