import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../authContext"; // Adjust the import path as necessary
import { toast } from "react-toastify";

export default function Navbar() {
  const { currentUser, setCurrentUser } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setCurrentUser(null);
    toast.success("Logged out successfully");
  };

  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
      data-bs-theme="light">
      <div class="container p-2">
        <Link
          class="navbar-brand"
          to="/"
          style={{ color: "#3483DB", fontWeight: "bold" }}>
          Stock Management
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            {/* Show Signup if not logged in */}
            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
            )}
            {/* Show Logout if logged in */}
            {currentUser && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-dark"
                  onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
            <li class="nav-item">
              <Link class="nav-link active" to="/about" aria-current="page">
                About
              </Link>
            </li>

            <li class="nav-item">
              <Link
                class="nav-link product active"
                to="/product"
                aria-disabled="true">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link pricing active"
                to="/pricing"
                aria-disabled="true">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link support active"
                to="/support"
                aria-disabled="true">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link product active"
                href="https://stock-dashboard.onrender.com">
                Dashboard
              </a> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
