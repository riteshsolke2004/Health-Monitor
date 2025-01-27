import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Overview Section */}
      <div className="dashboard-section">
        <h2>Overview</h2>
        <div className="grid-container">
          <div className="box">
            <h4>Heart Rate</h4>
            <p>80 bpm</p>
          </div>
          <div className="box">
            <h4>Steps</h4>
            <p>10,000</p>
          </div>
          <div className="box">
            <h4>Disease Predictor</h4>
            <p>No issues detected</p>
          </div>
          <div className="box">
            <h4>Recommendations</h4>
            <p>Stay Hydrated</p>
          </div>
        </div>
      </div>

      {/* Health Education Section */}
      <div className="dashboard-section">
        <h2>Health Education</h2>
        <div className="grid-container">
          <div className="box">
            <h4>Skin Care 101</h4>
            <p>Learn the basics of keeping your skin healthy.</p>
          </div>
          <div className="box">
            <h4>Protect Your Skin</h4>
            <p>Tips to protect your skin from harmful UV rays.</p>
          </div>
          <div className="box">
            <h4>Healthy Snacks</h4>
            <p>Discover nutritious and tasty snack options.</p>
          </div>
          <div className="box">
            <h4>Doctor Insights</h4>
            <p>Expert advice for maintaining a healthy lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
