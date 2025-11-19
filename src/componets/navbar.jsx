import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export default function ShopGenNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
      <div className="container">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/" className="navbar-brand fw-bold fs-3 text-decoration-none">
            <span style={{ color: "#007bff" }}>Shop</span>
            <span style={{ color: "#00d4ff" }}>Gen</span>
          </Link>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navMenu">

          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto gap-4 fs-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">Products</Link>
            </li>

            

            
          </ul>

          {/* SEARCH BAR */}
          <div className="d-flex align-items-center bg-light rounded-pill px-3 py-2 search-box">
            <i className="bi bi-search fs-5 me-2"></i>
            <input
              type="text"
              placeholder="Search products..."
              className="form-control border-0 bg-transparent"
            />
            <button className="btn btn-primary rounded-circle ms-2">
              <i className="bi bi-sliders"></i>
            </button>
          </div>

          {/* RIGHT ICONS */}
          <div className="d-flex align-items-center gap-3 ms-3">

            {/* Wishlist */}
            <div className="position-relative">
              <Link to="/wishlist" className="text-dark">
                <i className="bi bi-heart fs-4"></i>
                <span className="badge bg-info position-absolute top-0 start-100 translate-middle">3</span>
              </Link>
            </div>

            {/* Cart */}
            <div className="position-relative">
              <Link to="/cart" className="text-dark">
                <i className="bi bi-cart fs-4"></i>
                <span className="badge bg-primary position-absolute top-0 start-100 translate-middle">7</span>
              </Link>
            </div>

            {/* Profile */}
            <Link to="/login">
              <div
                className="rounded-circle d-flex justify-content-center align-items-center text-white fs-5"
                style={{
                  width: "45px",
                  height: "45px",
                  background: "linear-gradient(45deg, #007bff, #00d4ff)",
                  cursor: "pointer"
                }}
              >
                J
              </div>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
