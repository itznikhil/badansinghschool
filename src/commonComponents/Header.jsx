import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/Auth";
import { FaLocationArrow, FaAlignJustify } from "react-icons/fa";
import "../assets/css/header.css";
export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  return (
    <div>
      <span className="orange-bg-color p-2 ps-2 pe-2 d-flex justify-content-between mb-0">
        <span className="text-white fw-bold text-15">
          Call Now : +91-9084088146
        </span>
        <a
          className="text-white fw-bold text-decoration-none text-15"
          rel="noreferrer"
          target="_blank"
          href="https://www.google.com/maps/place/SHRI+BADAN+SINGH+HS+SCHOOL+BAGRAIN/@28.3001353,79.0317992,17z/data=!3m1!4b1!4m5!3m4!1s0x390ab5932d2c4419:0xc772cb123e472b23!8m2!3d28.3001306!4d79.0339879
"
        >
          <FaLocationArrow color="#fff" />
          &ensp;Get Direction
        </a>
      </span>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid mt-0">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <p>
              <img
                src={require("../assets/images/logo.jpg")}
                className="logo"
                alt="logo"
              />
            </p>
            <p className="text-15 orange-text-color fw-bold ms-2">
              Shri Badan Singh Higher Secondary School, <br />
              Bagrain (Budaun)
            </p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShowNav(!showNav)}
          >
            <span className="navbar-toggler-icon" role="button">
              <FaAlignJustify />
            </span>
          </button>
          <div
            className={
              showNav
                ? "collapse navbar-collapse active"
                : "collapse navbar-collapse "
            }
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto text-15 ">
              {isLoggedIn ? (
                <li className="nav-item">
                  <button
                    className="btn btn-link text-decoration-none orange-text-color fw-bold"
                    type="button"
                    onClick={() => {
                      localStorage.setItem("auth", null);
                      handleLogout();
                    }}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link orange-text-color fw-bold"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link orange-text-color fw-bold"
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link orange-text-color fw-bold"
                      to="/admission"
                    >
                      Admission
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link orange-text-color fw-bold"
                      to="/staffdetails"
                    >
                      Staff Details
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link orange-text-color fw-bold"
                      to="/exams"
                    >
                      Exams
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link orange-text-color fw-bold"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link orange-text-color fw-bold"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
