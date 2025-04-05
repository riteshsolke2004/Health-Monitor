// HealthProfile.jsx
import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import { Activity, Heart, User, Calendar, Clipboard, Award, Phone, Mail, MapPin, Clock } from 'lucide-react';

const HealthProfile = ({ userData }) => {
  // Default health-focused user data
  const defaultHealthUser = {
    personalInfo: {
      name: "Sarah Johnson",
      age: 34,
      gender: "Female",
      height: "5'7\"",
      weight: "145 lbs",
      bloodType: "O+",
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 123-4567",
      location: "Boston, MA",
      emergencyContact: "Mark Johnson, +1 (555) 987-6543",
      profileImage: "/api/placeholder/150/150"
    },
    healthMetrics: {
      currentWeight: 145,
      weightGoal: 140,
      bmi: 22.7,
      restingHeartRate: 68,
      bloodPressure: "118/78",
      sleepAverage: "7.2 hours",
      stepsAverage: "8,456"
    },
    vitals: [
      { date: "2025-03-30", heartRate: 72, bloodPressure: "120/80", weight: 146 },
      { date: "2025-04-01", heartRate: 68, bloodPressure: "118/78", weight: 145 },
      { date: "2025-04-03", heartRate: 70, bloodPressure: "119/79", weight: 145 }
    ],
    medicalConditions: [
      "Mild Asthma",
      "Seasonal Allergies"
    ],
    medications: [
      { name: "Albuterol", dosage: "90mcg", frequency: "As needed" },
      { name: "Loratadine", dosage: "10mg", frequency: "Once daily" }
    ],
    appointments: [
      { type: "Annual Physical", doctor: "Dr. Williams", date: "2025-05-15", time: "10:00 AM" },
      { type: "Allergist Follow-up", doctor: "Dr. Chen", date: "2025-06-22", time: "2:30 PM" }
    ],
    goals: [
      { name: "Reduce resting heart rate", target: "65 bpm", progress: "68 bpm" },
      { name: "Exercise 30 min daily", target: "7 days/week", progress: "5 days/week" },
      { name: "Increase water intake", target: "64 oz daily", progress: "50 oz daily" }
    ]
  };

  const [healthData, setHealthData] = useState(userData || defaultHealthUser);

  useEffect(() => {
    if (userData) {
      setHealthData(userData);
    }
  }, [userData]);

  const calculateProgressPercentage = (current, target) => {
    // Simple example for weight goal
    if (healthData.healthMetrics.weightGoal < healthData.healthMetrics.currentWeight) {
      const totalToLose = defaultHealthUser.personalInfo.weight - healthData.healthMetrics.weightGoal;
      const lost = defaultHealthUser.personalInfo.weight - healthData.healthMetrics.currentWeight;
      return Math.min(100, Math.round((lost / totalToLose) * 100));
    }
    return 50; // Default placeholder
  };

  return (
    <div className="health-profile-container">
      <div className="health-profile-header">
        <div className="profile-banner">
          <h1>Health Monitor</h1>
        </div>
        <div className="profile-user-info">
          <div className="profile-image">
            <img src={healthData.personalInfo.profileImage} alt={healthData.personalInfo.name} />
          </div>
          <div className="profile-details">
            <h2>{healthData.personalInfo.name}</h2>
            <p className="profile-subtitle">
              {healthData.personalInfo.age} years old • {healthData.personalInfo.gender} • {healthData.personalInfo.bloodType}
            </p>
            <div className="contact-details">
              <p><Phone size={16} /> {healthData.personalInfo.phone}</p>
              <p><Mail size={16} /> {healthData.personalInfo.email}</p>
              <p><MapPin size={16} /> {healthData.personalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="health-dashboard">
        <section className="health-card current-metrics">
          <h3><Heart /> Current Health Metrics</h3>
          <div className="metrics-grid">
            <div className="metric">
              <p className="metric-name">Weight</p>
              <p className="metric-value">{healthData.healthMetrics.currentWeight} lbs</p>
            </div>
            <div className="metric">
              <p className="metric-name">BMI</p>
              <p className="metric-value">{healthData.healthMetrics.bmi}</p>
            </div>
            <div className="metric">
              <p className="metric-name">Heart Rate</p>
              <p className="metric-value">{healthData.healthMetrics.restingHeartRate} bpm</p>
            </div>
            <div className="metric">
              <p className="metric-name">Blood Pressure</p>
              <p className="metric-value">{healthData.healthMetrics.bloodPressure}</p>
            </div>
            <div className="metric">
              <p className="metric-name">Sleep</p>
              <p className="metric-value">{healthData.healthMetrics.sleepAverage}</p>
            </div>
            <div className="metric">
              <p className="metric-name">Daily Steps</p>
              <p className="metric-value">{healthData.healthMetrics.stepsAverage}</p>
            </div>
          </div>
        </section>
        
        <section className="health-card recent-vitals">
          <h3><Activity /> Recent Vitals</h3>
          <table className="vitals-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Heart Rate</th>
                <th>Blood Pressure</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {healthData.vitals.map((vital, index) => (
                <tr key={index}>
                  <td>{vital.date}</td>
                  <td>{vital.heartRate} bpm</td>
                  <td>{vital.bloodPressure}</td>
                  <td>{vital.weight} lbs</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        
        <section className="health-card goals">
          <h3><Award /> Health Goals</h3>
          <div className="goals-list">
            {healthData.goals.map((goal, index) => (
              <div className="goal-item" key={index}>
                <div className="goal-info">
                  <h4>{goal.name}</h4>
                  <p>Target: {goal.target} • Current: {goal.progress}</p>
                </div>
                <div className="goal-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-filled" 
                      style={{ width: `${calculateProgressPercentage(goal.progress, goal.target)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <div className="health-cards-row">
          <section className="health-card medical-info">
            <h3><Clipboard /> Medical Information</h3>
            <div className="info-section">
              <h4>Conditions</h4>
              <ul>
                {healthData.medicalConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>
            <div className="info-section">
              <h4>Medications</h4>
              <ul>
                {healthData.medications.map((med, index) => (
                  <li key={index}>{med.name} - {med.dosage}, {med.frequency}</li>
                ))}
              </ul>
            </div>
          </section>
          
          <section className="health-card appointments">
            <h3><Calendar /> Upcoming Appointments</h3>
            <div className="appointments-list">
              {healthData.appointments.map((appointment, index) => (
                <div className="appointment-item" key={index}>
                  <div className="appointment-type">{appointment.type}</div>
                  <div className="appointment-doctor">{appointment.doctor}</div>
                  <div className="appointment-datetime">
                    <Calendar size={14} /> {appointment.date}
                    <Clock size={14} className="ml-2" /> {appointment.time}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HealthProfile;