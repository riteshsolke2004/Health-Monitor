import React, { useState } from "react";
import "./Sidebar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2 >Dashboard</h2>
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
