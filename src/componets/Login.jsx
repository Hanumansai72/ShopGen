import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Login() {
  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e7f5ff, #f9fbff)",
      }}
    >
      {/* LEFT SIDE – HERO */}
      <div
        className="flex-grow-1 d-none d-md-flex align-items-center justify-content-center text-dark"
        style={{
          padding: "60px",
          background:
            "linear-gradient(135deg, rgba(0,212,255,0.25), rgba(0,119,255,0.15))",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ maxWidth: "550px" }}>
          <motion.h1
            className="fw-bold display-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Shop Smarter with <br />
            <span style={{ color: "#00bafc" }}>AI-Powered</span> Recommendations
          </motion.h1>

          <p className="mt-3 fs-5 text-dark opacity-75">
            Experience personalized shopping like never before.  
            Our AI analyzes your preferences and finds the perfect  
            products just for you.
          </p>

          {/* Feature Icons */}
          <div className="d-flex gap-4 mt-5">
            <div className="text-center">
              <div className="p-3 rounded-4 bg-white shadow-sm">
                <i className="bi bi-cpu fs-2 text-primary"></i>
              </div>
              <div className="fw-semibold mt-2">Smart AI</div>
            </div>

            <div className="text-center">
              <div className="p-3 rounded-4 bg-white shadow-sm">
                <i className="bi bi-shield-check fs-2 text-primary"></i>
              </div>
              <div className="fw-semibold mt-2">Secure</div>
            </div>

            <div className="text-center">
              <div className="p-3 rounded-4 bg-white shadow-sm">
                <i className="bi bi-lightning fs-2 text-primary"></i>
              </div>
              <div className="fw-semibold mt-2">Fast</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE – LOGIN FORM */}
      <div
        className="bg-white shadow-lg"
        style={{
          width: "450px",
          padding: "50px",
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
        }}
      >
        <h4 className="fw-bold mb-2">Sign In</h4>
        <p className="text-muted mb-4">
          Sign in to continue your personalized shopping experience.
        </p>

        {/* Email Input */}
        <div className="mb-3">
          <label className="fw-semibold">Email Address</label>
          <div className="input-group mt-1">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control border-start-0"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="fw-semibold">Password</label>
          <div className="input-group mt-1">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control border-start-0"
              placeholder="Enter your password"
            />
            <span className="input-group-text bg-white">
              <i className="bi bi-eye"></i>
            </span>
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="ms-2">
              Remember me
            </label>
          </div>

          <a href="#" className="text-primary text-decoration-none">
            Forgot Password?
          </a>
        </div>

        {/* Sign In Button */}
        <button
          className="btn btn-primary w-100 py-3 rounded-pill fw-semibold"
          style={{ background: "#3d7bfd" }}
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="text-center my-3">
          <span className="text-muted">OR</span>
        </div>

        {/* Google Login */}
        <button className="btn w-100 py-3 mb-3 border rounded-pill d-flex align-items-center justify-content-center gap-2">
          <i className="bi bi-google fs-5 text-danger"></i>
          Continue with Google
        </button>

        {/* Apple + Facebook */}
        <div className="d-flex gap-3">
          <button className="btn py-3 w-50 border rounded-pill d-flex align-items-center justify-content-center gap-2">
            <i className="bi bi-apple fs-4"></i> Apple
          </button>
          <button className="btn py-3 w-50 border rounded-pill d-flex align-items-center justify-content-center gap-2">
            <i className="bi bi-facebook fs-4 text-primary"></i> Facebook
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary fw-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
