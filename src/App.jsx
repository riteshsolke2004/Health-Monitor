import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import SkinCare from "./pages/SkinCare";
import Workout from "./pages/Workout";
import HealthySnacks from "./pages/HealthySnacks";
import DoctorInsights from "./pages/DoctorInsights";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import LoginSignup from "./components/LoginSignup/Login";
import "./App.css";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Sidebar setSidebarOpen={setSidebarOpen} /> {/* Sidebar appears on all pages */}

        <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
          <Header /> {/* Header appears on all pages */}

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skin-care" element={<SkinCare />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/healthy-snacks" element={<HealthySnacks />} />
            <Route path="/doctor-insights" element={<DoctorInsights />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
