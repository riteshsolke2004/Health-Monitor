import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Health.css";

const Health = () => {
  // State for real-time health metrics
  const [heartRate, setHeartRate] = useState(72);
  const [bloodPressure, setBloodPressure] = useState("120/80");
  const [sleepHours, setSleepHours] = useState(7.5);

  // Simulate real-time health data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate((prev) => Math.floor(Math.random() * (85 - 60) + 60)); // Random between 60-85 bpm
      setBloodPressure(
        `${Math.floor(Math.random() * (130 - 110) + 110)}/${Math.floor(Math.random() * (85 - 70) + 70)}`
      ); // Random BP values
      setSleepHours((prev) => (Math.random() * (8 - 6) + 6).toFixed(1)); // Random between 6-8 hrs
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <motion.div 
      className="health-container"
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <h1 className="health-title">Real-Time Health Monitoring</h1>
      <p className="health-description">
        Live updates on your health metrics powered by AI.
      </p>

      <motion.div className="health-card" whileHover={{ scale: 1.05 }}>
        <h2>Heart Rate</h2>
        <p>{heartRate} bpm</p>
      </motion.div>

      <motion.div className="health-card" whileHover={{ scale: 1.05 }}>
        <h2>Blood Pressure</h2>
        <p>{bloodPressure} mmHg</p>
      </motion.div>

      <motion.div className="health-card" whileHover={{ scale: 1.05 }}>
        <h2>Sleep Analysis</h2>
        <p>{sleepHours} Hours</p>
      </motion.div>
    </motion.div>
  );
};

export default Health;
