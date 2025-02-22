import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const overviewData = [
    { name: "Heart Rate", className: "heart-rate" },
    { name: "Steps", className: "steps" },
    { name: "Disease Predictor", className: "disease-predictor" },
    { name: "Recommendations", className: "recommendations" },
  ];

  const healthEducationData = [
    { name: "Skin Care", className: "skin-care", path: "/skin-care" },
    { name: "Work-out", className: "workout", path: "/Work-out" },
    { name: "Healthy Snacks", className: "healthy-snacks", path: "/healthy-snacks" },
    { name: "Doctor Insights", className: "doctor-insights", path: "/doctor-insights" },
  ];

  return (
    <div className="dashboard">
      {/* Overview Section */}
      <div className="dashboard-section">
        <h2>Overview</h2>
        <div className="grid-container">
          {overviewData.map((item, index) => (
            <div key={index} className={`box ${item.className}`}>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Health Education Section */}
      <div className="dashboard-section">
        <h2>Health Education</h2>
        <div className="grid-container">
          {healthEducationData.map((item, index) => (
            <div
              key={index}
              className={`box ${item.className}`}
              onClick={() => navigate(item.path)}
            >
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
