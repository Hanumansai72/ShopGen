import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ShopGenNavbar from "./navbar";
import ShopGenFooter from "./footer";

export default function LandingPage() {
  const recommendedProducts = [
    {
      name: "Premium Wireless Headphones",
      img: "https://images.unsplash.com/photo-1580894908361-967195033c5f",
      rating: "4.8",
      reviews: "4,892",
    },
    {
      name: "Smart Fitness Watch Pro",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      rating: "4.7",
      reviews: "3,241",
    },
    {
      name: "Portable Bluetooth Speaker",
      img: "https://images.unsplash.com/photo-1585386959984-a4155224a1a0",
      rating: "4.3",
      reviews: "2,156",
    },
    {
      name: "Ultra-Thin Laptop Pro",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      rating: "5.0",
      reviews: "5,789",
    }
  ];

  return (
    <>
      <ShopGenNavbar />

      {/* ACCURACY SECTION */}
      <section
        className="text-center text-white py-5"
        style={{
          background: "radial-gradient(circle at center, #0b1d3b, #050a18)",
          paddingTop: "100px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div
            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#00d2ff,#007fff)",
            }}
          >
            <i className="bi bi-magic fs-1 text-white"></i>
          </div>

          <h1 className="fw-bold display-5">
            Get More Accurate Recommendations
          </h1>

          <p className="fs-4 mt-3 text-light">
            Help our AI understand you better by updating your preferences
            and interests
          </p>

          <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
            <button
              className="btn rounded-pill px-5 py-3 text-white"
              style={{
                background: "linear-gradient(135deg,#00d2ff,#3a7bd5)",
                fontSize: "1.2rem",
              }}
            >
              Update My Preferences
            </button>

            <button
              className="btn btn-outline-light rounded-pill px-5 py-3"
              style={{ fontSize: "1.2rem" }}
            >
              Learn More About AI
            </button>
          </div>

          <div className="d-flex justify-content-center gap-5 mt-4 text-white opacity-75">
            <span><i className="bi bi-shield-check"></i> Privacy Protected</span>
            <span><i className="bi bi-lock"></i> Secure Data</span>
            <span><i className="bi bi-cpu"></i> Smart AI</span>
          </div>
        </motion.div>
      </section>

      {/* HERO SECTION */}
      <section
        className="container py-5"
        style={{
          background:
            "linear-gradient(120deg, #eefaff, #dff5ff, #e8faff)",
          borderRadius: "40px",
        }}
      >
        <div className="row align-items-center">
          {/* LEFT TEXT */}
          <div className="col-md-6">
            <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
              🔍 AI-Powered Shopping Experience
            </span>

            <h1 className="fw-bold display-4 mt-3">
              Find the Right <br />
              <span style={{ color: "#00d2ff" }}>Products Instantly</span>
            </h1>

            <p className="mt-3 fs-5 text-secondary">
              AI-powered recommendations based on your interests & reviews.
              Discover products tailored to your needs using intelligent
              machine learning.
            </p>

            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-primary px-4 py-3 rounded-pill">
                Get Started →
              </button>

              <button className="btn btn-outline-primary px-4 py-3 rounded-pill">
                Explore Products <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>

            <div className="d-flex gap-5 mt-4 text-dark">
              <div>
                <h3 className="fw-bold">50K+</h3>
                <small className="text-muted">Active Users</small>
              </div>
              <div>
                <h3 className="fw-bold">1M+</h3>
                <small className="text-muted">Products</small>
              </div>
              <div>
                <h3 className="fw-bold">98%</h3>
                <small className="text-muted">Satisfaction</small>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center mt-4">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/89075c6124-793b9aa71758403d35bb.png"
              alt="AI Brain"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-5 text-center">
        <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
          Simple Process
        </span>

        <h2 className="fw-bold mt-3 mb-5">How It Works</h2>

        <div className="row g-4">
          {[
            {
              number: 1,
              icon: "bi-search",
              title: "Browse Products",
              desc: "Explore millions of products across categories.",
            },
            {
              number: 2,
              icon: "bi-star",
              title: "Rate & Review Items",
              desc: "Help our AI understand your preferences.",
            },
            {
              number: 3,
              icon: "bi-cpu",
              title: "Get Smart Recommendations",
              desc: "Personalized suggestions tailored for you.",
            },
          ].map((step, i) => (
            <div key={i} className="col-md-4">
              <div className="position-relative p-4 rounded-4 border shadow-sm bg-white h-100">
                <span
                  className="position-absolute top-0 start-50 translate-middle badge bg-primary text-white rounded-circle"
                  style={{ width: "45px", height: "45px", fontSize: "1.2rem" }}
                >
                  {step.number}
                </span>

                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg,#00d2ff,#007fff)",
                  }}
                >
                  <i className={`bi ${step.icon} fs-2 text-white`}></i>
                </div>

                <h4 className="fw-bold">{step.title}</h4>
                <p className="text-muted">{step.desc}</p>
                <a href="#" className="text-primary fw-semibold">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="container py-5">
        <span className="badge bg-info bg-opacity-25 text-primary px-3 py-2">
          ⚡ Powerful Features
        </span>

        <h2 className="fw-bold mt-3 mb-5 text-center">Everything You Need</h2>

        <div className="row g-4 text-center">
          {[
            { icon: "bi-magic", title: "AI Recommendations" },
            { icon: "bi-search", title: "Smart Search" },
            { icon: "bi-bar-chart", title: "Personalized Dashboard" },
            { icon: "bi-funnel", title: "Fast Filtering" },
          ].map((feature, i) => (
            <div key={i} className="col-md-3">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <div
                  className="p-3 rounded-4 mx-auto mb-3"
                  style={{
                    width: "60px",
                    background: "linear-gradient(135deg,#00d2ff,#007fff)",
                  }}
                >
                  <i className={`bi ${feature.icon} fs-3 text-white`}></i>
                </div>
                <h5 className="fw-bold">{feature.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECOMMENDED SLIDER */}
      <section className="container py-5">
        <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
          🔥 Trending Now
        </span>

        <h2 className="fw-bold mt-3">Recommended For You</h2>
        <p className="text-muted">
          Discover products handpicked by our AI based on your interests
        </p>

        <div className="d-flex gap-4 overflow-auto pt-3 pb-4">
          {recommendedProducts.map((p, i) => (
            <div
              key={i}
              className="p-3 bg-white rounded-4 shadow-sm"
              style={{ minWidth: "280px" }}
            >
              <div className="position-relative">
                <img
                  src={p.img}
                  className="img-fluid rounded-4"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <span
                  className="badge position-absolute top-0 end-0 bg-info text-dark mt-2 me-2"
                  style={{ fontSize: "0.8rem" }}
                >
                  Recommended
                </span>
              </div>

              <div className="mt-2">
                <span className="text-warning fs-5">★</span>{" "}
                {p.rating} <span className="text-muted">({p.reviews})</span>

                <h5 className="fw-bold mt-2">{p.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="text-center text-white py-5"
        style={{
          background: "radial-gradient(circle, #05122e, #000714)",
        }}
      >
        <span className="badge bg-primary bg-opacity-25 text-primary px-3 py-2">
          🚀 Get Started Today
        </span>

        <h1 className="fw-bold mt-3 display-5">
          Start Your Personalized Shopping Journey
        </h1>

        <p className="mt-3 fs-5 text-light opacity-75">
          Join thousands of smart shoppers discovering products they love.
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-primary px-5 py-3 rounded-pill">
            Create My Account →
          </button>

          <button className="btn btn-outline-light px-5 py-3 rounded-pill">
            Watch Demo ▶
          </button>
        </div>

        <div className="d-flex justify-content-center gap-5 mt-4 text-light opacity-75">
          <span><i className="bi bi-credit-card"></i> No credit card required</span>
          <span><i className="bi bi-calendar-check"></i> 14-day free trial</span>
          <span><i className="bi bi-x-circle"></i> Cancel anytime</span>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="container py-5">
        <span className="badge bg-info bg-opacity-25 text-primary px-3 py-2">
          ❓ FAQ
        </span>

        <h2 className="fw-bold mt-3 mb-5 text-center">
          Frequently Asked Questions
        </h2>

        {[
          {
            q: "How does the AI recommendation system work?",
            a: "Our AI analyzes your browsing history, purchases, ratings, and reviews to understand your preferences.",
          },
          {
            q: "Is my data secure with ShopGen?",
            a: "Absolutely! We use bank-level encryption and industry best practices to protect your personal information.",
          },
          {
            q: "Can I cancel my subscription anytime?",
            a: "Yes! Cancel your subscription anytime with no questions asked.",
          },
        ].map((faq, i) => (
          <div
            key={i}
            className="p-4 border rounded-4 mb-3 shadow-sm bg-white"
          >
            <h5 className="fw-bold">{faq.q}</h5>
            <p className="text-muted">{faq.a}</p>
          </div>
        ))}
      </section>

      <ShopGenFooter />
    </>
  );
}
