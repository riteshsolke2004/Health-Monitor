import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import SkinCare from "./pages/SkinCare";
import Workout from "./pages/Workout";
import HealthySnacks from "./pages/HealthySnacks";
import DoctorInsights from "./pages/DoctorInsights";
import Profile from "./components/Profile/Profile";
import LoginSignup from "./components/LoginSignup/Login";
import Footer from "./components/Footer/Footer";
import Interactive from "./pages/Interactive";
import Health from "./pages/Health";
import Chatbot from "./pages/Chatbot";
import Activity from "./pages/Activity";
import NewRecord from "./pages/NewRecord";
import Recommendation from "./pages/Recommendation";
import "./App.css";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Sidebar setSidebarOpen={setSidebarOpen} /> {/* Sidebar on all pages */}

        <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
          <Header /> {/* Header on all pages */}

          <Routes>
            {/* Dashboard & User Routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/profile" element={<Profile />} />

            {/* Health & Wellness Routes */}
            <Route path="/skin-care" element={<SkinCare />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/healthy-snacks" element={<HealthySnacks />} />
            <Route path="/doctor-insights" element={<DoctorInsights />} />

            {/* Sidebar Pages */}
            <Route path="/interactive" element={<Interactive />} />
            <Route path="/health" element={<Health />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/new-record" element={<NewRecord />} />
            <Route path="/recommendation" element={<Recommendation />} />
          </Routes>
        </div>
      </div>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
