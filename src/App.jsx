import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import LoginSignup from "./components/LoginSignup/Login";
import Recommendations from "./components/Recommendations/Recommendations"; // Import Recommendations page
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="main-content">
          <Header />
          <Routes>
            {/* Route Definitions */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/recommendations" element={<Recommendations />} /> {/* Add Recommendations Route */}
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
