import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "=" : "="}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2>Sidebar</h2>
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
        <button className="logout-button">Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
