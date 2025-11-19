import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopGenFooter from "./footer";
import ShopGenNavbar from "./navbar";

export default function RecommendationsUI() {
  const categories = [
{ title: "Electronics", count: 234, img: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
{ title: "Fashion", count: 567, img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/964e32f0e5-40fc5faa23bc13b358f5.png" },
{ title: "Home & Living", count: 189, img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8037e06ed0-079899677e911ec653d1.png" },
{ title: "Sports & Fitness", count: 312, img: "https://images.unsplash.com/photo-1571731956672-643cde4c61c5" },
];


const products = [
{ name: "Premium Wireless Headphones", price: 299, oldPrice: 399, rating: 4.8, reviews: "2.4k", match: 96, img: "https://images.unsplash.com/photo-1585386959984-a4155224a1a0" },
{ name: "Smart Fitness Watch Pro", price: 249, oldPrice: 329, rating: 5.0, reviews: "1.8k", match: 94, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
{ name: "RGB Mechanical Gaming Keyboard", price: 159, oldPrice: null, rating: 4.6, reviews: "3.2k", match: 92, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
{ name: "4K Ultra HD Smart TV", price: 899, oldPrice: 1199, rating: 4.7, reviews: "5.1k", match: 91, img: "https://images.unsplash.com/photo-1593784991095-a205069470b6" },
{ name: "Wireless Bluetooth Speaker", price: 129, oldPrice: 179, rating: 4.9, reviews: "3.9k", match: 95, img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439" },
{ name: "Gaming Mouse RGB", price: 79, oldPrice: 99, rating: 4.6, reviews: "2.1k", match: 93, img: "https://images.unsplash.com/photo-1584270354950-8cd2b7e6c3a1" },
{ name: "DSLR Camera Pro Lens", price: 1499, oldPrice: 1699, rating: 4.9, reviews: "1.5k", match: 98, img: "https://images.unsplash.com/photo-1519183071298-a2962be96dbc" },
{ name: "Noise Cancelling Earbuds", price: 199, oldPrice: 249, rating: 4.8, reviews: "4.7k", match: 94, img: "https://images.unsplash.com/photo-1580894732444-8ecdedc85052" },
{ name: "Portable Laptop Stand", price: 49, oldPrice: 79, rating: 4.5, reviews: "1.1k", match: 88, img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68" }

];

  return (
    <>
    <ShopGenNavbar></ShopGenNavbar>
    <div className="container-fluid py-5" style={{ background: "#e7f3ff" }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="badge bg-primary px-4 py-2 mb-3">AI Powered Recommendations</span>
        <h1 className="fw-bold display-5">Recommended for You</h1>
        <p className="mt-2 fs-5">
          Curated using AI based on your browsing history, ratings, and preferences
        </p>
        <span className="badge bg-success px-3 py-2">● Live recommendations updating</span>
      </motion.div>

      {/* Tabs */}
      <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        {["Trending", "Based on Your Ratings", "Similar to Viewed Items", "AI Picks", "Category-Based", "New Arrivals", "Best Deals"].map((tab, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            className="btn btn-light px-4 py-2 shadow-sm rounded-pill"
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Product List */}
      {/* Product Slider */}
<div className="container mt-5">
  <h2 className="fw-bold mb-3">Your Personalized Picks</h2>
  <p className="text-muted">348 products found</p>

  <div className="position-relative">

    {/* Scrollable Slider */}
    <motion.div
      className="d-flex overflow-auto gap-4 pb-4"
      style={{ scrollBehavior: "smooth" }}
    >
      {products.map((p, i) => (
        <motion.div
          key={i}
          className="card shadow-lg border-0 rounded-4 overflow-hidden"
          style={{
            minWidth: "300px",
            height: "420px",
            flex: "0 0 auto",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Medium Image */}
          <img
            src={p.img}
            className="card-img-top"
            style={{
              height: "250px",
              width: "100%",
              objectFit: "cover",
            }}
            alt={p.name}
          />

          <div className="position-absolute top-0 start-0 m-3 badge bg-info">
            AI Match {p.match}%
          </div>

          <div className="card-body">
            <h5 className="fw-bold">{p.name}</h5>

            <p className="text-warning mb-1">
              ⭐ {p.rating} ({p.reviews} reviews)
            </p>

            <p className="text-muted small">Similar to items you've viewed</p>

            <div className="d-flex gap-2 align-items-center">
              <h4 className="fw-bold text-primary">${p.price}</h4>
              {p.oldPrice && (
                <span className="text-decoration-line-through text-muted">
                  ${p.oldPrice}
                </span>
              )}
            </div>

            <button className="btn btn-primary w-100 mt-3 rounded-pill">
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* LEFT ARROW */}
    <button
      className="btn btn-light shadow position-absolute top-50 start-0 translate-middle-y rounded-circle"
      onClick={() => {
        document.querySelector(".overflow-auto").scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }}
      style={{ zIndex: 10 }}
    >
      <i className="bi bi-chevron-left"></i>
    </button>

    {/* RIGHT ARROW */}
    <button
      className="btn btn-light shadow position-absolute top-50 end-0 translate-middle-y rounded-circle"
      onClick={() => {
        document.querySelector(".overflow-auto").scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }}
      style={{ zIndex: 10 }}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  </div>
</div>


      {/* Categories */}
      <div className="container mt-5">
        <h2 className="fw-bold">Trending in Your Categories</h2>
        <p className="text-muted">Popular picks based on your interests</p>

        <div className="row g-4 mt-3">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              className="col-md-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                <img src={c.img} className="card-img" alt={c.title} />
                <div className="card-img-overlay d-flex flex-column justify-content-end text-white" style={{ background: "rgba(0,0,0,0.3)" }}>
                  <h4 className="fw-bold">{c.title}</h4>
                  <p>{c.count} products</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <ShopGenFooter></ShopGenFooter>
    </>
  );
}
