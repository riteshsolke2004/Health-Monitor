import React, { useState, useEffect, useRef } from "react";
import "./Sidebar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = ({ setSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setSidebarOpen(!isOpen); // Update the parent state
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
        setSidebarOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="sidebar-container">
      {/* Toggle Button */}
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <img src="Interactive.png" alt="Interactive" />
            Interactive
          </li>
          <li>
            <img src="Activity.png" alt="Activity" />
            Activity
          </li>
          <li>
            <img src="Health.png" alt="Health" />
            Health
          </li>
        </ul>
        <ul>
          <li>
            <img src="New record.png" alt="New Record" />
            New Record
          </li>
          <li>
            <img src="Recommendation.png" alt="Recommendations" />
            Recommendations
          </li>
          <li>
            <img src="chatbot1.png" alt="Chatbot" />
            Chatbot
          </li>
        </ul>
        <button className="logout-button">
          <RiLogoutBoxRLine /> Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
