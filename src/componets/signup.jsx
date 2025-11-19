import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Signup() {
  const [showPass, setShowPass] = useState(false);

  const interests = [
    { icon: "bi-shirt", label: "Fashion" },
    { icon: "bi-phone", label: "Electronics" },
    { icon: "bi-dribbble", label: "Sports" },
    { icon: "bi-house", label: "Home" },
    { icon: "bi-book", label: "Books" },
    { icon: "bi-heart", label: "Beauty" },
    { icon: "bi-controller", label: "Gaming" },
    { icon: "bi-egg-fried", label: "Food" },
  ];

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">

        {/* LEFT PANEL */}
        <div
          className="col-md-6 d-none d-md-flex align-items-center justify-content-center text-white p-5"
          style={{
            background: "linear-gradient(135deg, #00a2ff, #007bff)",
            minHeight: "100vh",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center px-5"
          >
            <div
              className="rounded-4 mb-4 mx-auto d-flex align-items-center justify-content-center"
              style={{
                background: "rgba(255,255,255,0.2)",
                width: "90px",
                height: "90px",
              }}
            >
              <i className="bi bi-lock fs-1"></i>
            </div>

            <h1 className="fw-bold">Welcome to ShopGen</h1>
            <h5 className="mt-2">Create Your Smart Shopping Profile</h5>

            <p className="mt-3 fs-5">
              Experience AI-powered product recommendations tailored just for you.
              Shop smarter, discover faster, and save more with intelligent insights.
            </p>
          </motion.div>
        </div>

        {/* RIGHT PANEL (FORM) */}
        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div style={{ width: "100%", maxWidth: "500px" }}>
            {/* Logo */}
            <div className="d-flex align-items-center mb-4">
              <div
                className="rounded-circle d-flex justify-content-center align-items-center me-2"
                style={{
                  width: "45px",
                  height: "45px",
                  background: "linear-gradient(135deg, #00a2ff, #007bff)",
                }}
              >
                <i className="bi bi-cart text-white fs-4"></i>
              </div>
              <h3 className="fw-bold m-0">
                <span style={{ color: "#007bff" }}>Shop</span>
                <span style={{ color: "#00c6ff" }}>Gen</span>
              </h3>
            </div>

            <h2 className="fw-bold mb-2">Create Account</h2>
            <p className="text-muted mb-4">
              Join thousands of smart shoppers today
            </p>

            {/* Full Name */}
            <label className="fw-semibold">
              <i className="bi bi-person-fill me-2"></i> Full Name
            </label>
            <input
              className="form-control py-3 mb-3"
              placeholder="Enter your full name"
            />

            {/* Email */}
            <label className="fw-semibold">
              <i className="bi bi-envelope-fill me-2"></i> Email Address
            </label>
            <input
              className="form-control py-3 mb-3"
              placeholder="you@example.com"
            />

            {/* Password */}
            <label className="fw-semibold">
              <i className="bi bi-lock-fill me-2"></i> Password
            </label>
            <div className="input-group mb-3">
              <input
                type={showPass ? "text" : "password"}
                className="form-control py-3"
                placeholder="Create a strong password"
              />
              <span
                className="input-group-text"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPass(!showPass)}
              >
                <i className={`bi ${showPass ? "bi-eye-slash" : "bi-eye"}`}></i>
              </span>
            </div>

            {/* Confirm Password */}
            <label className="fw-semibold">
              <i className="bi bi-lock-fill me-2"></i> Confirm Password
            </label>
            <input
              type="password"
              className="form-control py-3 mb-4"
              placeholder="Re-enter your password"
            />

            {/* Interests */}
            <label className="fw-semibold mb-2">
              <i className="bi bi-tags-fill me-2"></i> Select Your Interests
            </label>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {interests.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-2 rounded-pill bg-light border"
                  style={{ cursor: "pointer" }}
                >
                  <i className={`bi ${item.icon} me-2`}></i>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Terms */}
            <div className="form-check mb-4">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label htmlFor="terms" className="form-check-label">
                I agree to the{" "}
                <a href="#" className="text-primary fw-bold">Terms & Conditions</a> and{" "}
                <a href="#" className="text-primary fw-bold">Privacy Policy</a>
              </label>
            </div>

            {/* Create Account Button */}
            <button
              className="btn text-white w-100 py-3 rounded-pill"
              style={{
                background: "linear-gradient(135deg, #007bff, #00c6ff)",
                fontSize: "18px",
              }}
            >
              <i className="bi bi-person-plus me-2"></i>
              Create Account
            </button>

            <p className="text-center mt-4 text-muted">Or continue with</p>
          </div>
        </div>

      </div>
    </div>
  );
}
