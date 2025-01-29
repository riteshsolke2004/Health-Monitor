import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    if (!isLoggedIn) {
      navigate("/login"); // Redirect to Login/Signup if not logged in
    } else {
      setIsProfileOpen(!isProfileOpen);
    }
  };

  return (
    <div className="header">
      <h2 className="logo">Disease Prediction</h2>
      <div className="header-actions">
        <input type="text" placeholder="Search..." />
        <span className="icon">🔔</span>
        <span className="icon">⚙️</span>
        <div className="profile-section">
          <div className="profile-avatar" onClick={toggleProfileMenu}>
            <img src="user1.png" alt="Profile" className="avatar" />
          </div>
          {isProfileOpen && (
            <div className="profile-dropdown">
              <Link to="/profile" className="dropdown-item">
                View Profile
              </Link>
              <button
                className="dropdown-item logout-button"
                onClick={() => setIsLoggedIn(false)} // Log out user
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
