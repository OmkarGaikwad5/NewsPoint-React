import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
  "Technology",
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports"
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand fw-bold fs-4 text-primary" to="/general">
          NewsPoint
        </NavLink>
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

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <NavLink
                  to={`/${category}`}
                  className={({ isActive }) =>
                    `nav-link px-3 mx-1 ${isActive ? "active text-white bg-primary rounded" : "text-dark"}`
                  }
                >
                  {category}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
