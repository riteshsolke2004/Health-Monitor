import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Dashboard from "./pages/Dashboard/Dashboard";
import SkinCare from "./pages/SkinCare";
import Workout from "./pages/Workout";
import HealthySnacks from "./pages/HealthySnacks";
import DoctorInsights from "./pages/DoctorInsights";
import Profile from "./components/Profile/Profile";
import LoginSignup from "./components/LoginSignup/Login";
import Interactive from "./pages/Interactive";
import Health from "./pages/Health";
import Chatbot from "./pages/Chatbot";
import Activity from "./pages/Activity";
import NewRecord from "./pages/NewRecord";
import Recommendation from "./pages/Recommendation";
import DiseasePredictor from "./pages/Dashboard/DiseasePredictor";
import UserProfile from "./components/UserProfile/UserProfile";
import Recommendations from "./pages/Recommendations";
import FitnessTracker from "./pages/FitnessTracker";
import MapPage from "./pages/Dashboard/MapPage";

import routes from "./routes/routes";
import "./App.css";
import ConsultationPage from "./pages/Consultation";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Sidebar setSidebarOpen={setSidebarOpen} />

        <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
          <Header />

          <Routes>
            <Route path={routes.dashboard} element={<Dashboard />} />
            <Route path={routes.login} element={<LoginSignup />} />
            <Route path={routes.profile} element={<Profile />} />

            <Route path={routes.skinCare} element={<SkinCare />} />
            <Route path={routes.workout} element={<Workout />} />
            <Route path={routes.healthySnacks} element={<HealthySnacks />} />
            <Route path={routes.doctorInsights} element={<DoctorInsights />} />
            <Route path={routes.Consultation} element={<ConsultationPage/>}/>

            <Route path={routes.interactive} element={<Interactive />} />
            <Route path={routes.health} element={<Health />} />
            <Route path={routes.chatbot} element={<Chatbot />} />
            <Route path={routes.activity} element={<Activity />} />
            <Route path={routes.newRecord} element={<NewRecord />} />
            <Route path={routes.recommendation} element={<Recommendation />} />

            <Route path={routes.diseasePredictor} element={<DiseasePredictor />} />
            <Route path={routes.userProfile} element={<UserProfile />} />

            <Route path={routes.recommendations} element={<Recommendations />} />
            <Route path={routes.heartRate} element={<FitnessTracker />} />
            <Route path={routes.map} element={<MapPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
