import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // optional for extra styling

export default function ShopGenNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
      <div className="container">

        {/* Logo */}
        <motion.a 
          href="/" 
          className="navbar-brand fw-bold fs-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span style={{ color: "#007bff" }}>Shop</span>
          <span style={{ color: "#00d4ff" }}>Gen</span>
        </motion.a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-4 fs-5">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Deals</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          </ul>

          {/* Search Bar */}
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

          {/* Icons */}
          <div className="d-flex align-items-center gap-3 ms-3">
            <div className="position-relative">
              <i className="bi bi-heart fs-4"></i>
              <span className="badge bg-info position-absolute top-0 start-100 translate-middle">3</span>
            </div>

            <div className="position-relative">
              <i className="bi bi-cart fs-4"></i>
              <span className="badge bg-primary position-absolute top-0 start-100 translate-middle">7</span>
            </div>

            {/* Profile */}
            <div
              className="rounded-circle d-flex justify-content-center align-items-center text-white fs-5"
              style={{
                width: "45px",
                height: "45px",
                background: "linear-gradient(45deg, #007bff, #00d4ff)"
              }}
            >
              J
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
