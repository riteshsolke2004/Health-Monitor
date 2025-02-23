import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Activity.css";

const Activity = () => {
  // State for real-time activity metrics
  const [steps, setSteps] = useState(8450);
  const [calories, setCalories] = useState(620);
  const [workoutTime, setWorkoutTime] = useState(45);

  // Simulating real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prev) => prev + Math.floor(Math.random() * 200)); // Random steps increment
      setCalories((prev) => prev + Math.floor(Math.random() * 5)); // Small calorie increments
      setWorkoutTime((prev) => (prev < 60 ? prev + 1 : prev)); // Increase workout time up to 60 mins
    }, 3000); // Updates every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="activity-container"
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
    >
      <h1 className="activity-title">Real-Time Activity Tracking</h1>
      <p className="activity-description">
        Stay active and monitor your progress in real-time!
      </p>

      {/* Steps Card */}
      <motion.div className="activity-card" whileHover={{ scale: 1.05 }}>
        <h2>Steps Taken</h2>
        <p>{steps.toLocaleString()} Steps</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(steps / 10000) * 100}%` }}></div>
        </div>
        <p className="goal-text">{steps >= 10000 ? "Goal Reached! 🎉" : "Goal: 10,000 Steps"}</p>
      </motion.div>

      {/* Calories Card */}
      <motion.div className="activity-card" whileHover={{ scale: 1.05 }}>
        <h2>Calories Burned</h2>
        <p>{calories} kcal</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(calories / 800) * 100}%` }}></div>
        </div>
        <p className="goal-text">{calories >= 800 ? "Goal Achieved! 🎯" : "Goal: 800 kcal"}</p>
      </motion.div>

      {/* Workout Time Card */}
      <motion.div className="activity-card" whileHover={{ scale: 1.05 }}>
        <h2>Workout Time</h2>
        <p>{workoutTime} Minutes</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(workoutTime / 60) * 100}%` }}></div>
        </div>
        <p className="goal-text">{workoutTime >= 60 ? "Workout Complete! 🏆" : "Goal: 60 Minutes"}</p>
      </motion.div>
    </motion.div>
  );
};

export default Activity;
