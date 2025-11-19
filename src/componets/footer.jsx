import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

export default function ShopGenFooter() {
  return (
    <footer className="footer-section text-light pt-5 mt-5">
      <div className="container pb-4">

        <div className="row">

          {/* Brand Section */}
          <div className="col-md-3 mb-4">
            <h2 className="fw-bold">
              <span style={{ color: "#007bff" }}>Shop</span>
              <span style={{ color: "#00d4ff" }}>Gen</span>
            </h2>
            <p className="mt-3">
              AI-powered product recommendations tailored just for you.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <i className="bi bi-facebook social-icon"></i>
              <i className="bi bi-twitter social-icon"></i>
              <i className="bi bi-instagram social-icon"></i>
              <i className="bi bi-linkedin social-icon"></i>
            </div>
          </div>

          {/* Shop Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Shop</h5>
            <ul className="list-unstyled">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Living</li>
              <li>Beauty</li>
              <li>Sports</li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Track Order</li>
              <li>Returns</li>
              <li>Shipping Info</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom Bar */}
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">© 2024 ShopGen. All rights reserved.</p>

          <ul className="list-inline mb-0">
            <li className="list-inline-item">Privacy</li>
            <li className="list-inline-item">Terms</li>
            <li className="list-inline-item">Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
