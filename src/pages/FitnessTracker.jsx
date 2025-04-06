import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FitnessTracker.css";

const FitnessTracker = () => {
  // Sample data - in a real app, this would come from API/database
  const [userData, setUserData] = useState({
    name: "Alex",
    dailySteps: 7843,
    dailyStepsGoal: 10000,
    caloriesBurned: 420,
    caloriesGoal: 600,
    activeMinutes: 45,
    activeMinutesGoal: 60,
    heartRate: 72,
    sleep: 7.2,
    sleepGoal: 8,
    waterIntake: 5,
    waterIntakeGoal: 8,
  });

  // Exercise tracking
  const [exercises, setExercises] = useState([
    { id: 1, name: "Morning Run", duration: 35, calories: 320, date: "Apr 6" },
    { id: 2, name: "Yoga", duration: 45, calories: 180, date: "Apr 5" },
    { id: 3, name: "Weight Training", duration: 50, calories: 280, date: "Apr 4" },
  ]);

  // Form state for adding new exercise
  const [newExercise, setNewExercise] = useState({
    name: "",
    duration: "",
    calories: "",
  });

  // Exercise form handler
  const handleExerciseChange = (e) => {
    const { name, value } = e.target;
    setNewExercise(prev => ({ ...prev, [name]: value }));
  };

  // Add new exercise
  const handleAddExercise = (e) => {
    e.preventDefault();
    const exercise = {
      id: exercises.length + 1,
      name: newExercise.name,
      duration: parseInt(newExercise.duration),
      calories: parseInt(newExercise.calories),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
    setExercises([exercise, ...exercises]);
    setNewExercise({ name: "", duration: "", calories: "" });
  };

  // Calculate progress percentages
  const calculateProgress = (current, goal) => {
    return Math.min(Math.round((current / goal) * 100), 100);
  };

  return (
    <div className="fitness-tracker">
      {/* Header with animations */}
      <motion.header
        className="tracker-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>🏃‍♂️ FitTrack Pro</h1>
        <p className="welcome-message">Welcome back, {userData.name}!</p>
      </motion.header>

      {/* Stats Dashboard */}
      <motion.section 
        className="dashboard"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2>Today's Stats</h2>
        <div className="stats-grid">
          {/* Steps Card */}
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="stat-icon">👣</div>
            <div className="stat-content">
              <h3>Steps</h3>
              <div className="stat-value">{userData.dailySteps.toLocaleString()}</div>
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${calculateProgress(userData.dailySteps, userData.dailyStepsGoal)}%` }}
                ></div>
              </div>
              <div className="progress-text">
                {calculateProgress(userData.dailySteps, userData.dailyStepsGoal)}% of daily goal
              </div>
            </div>
          </motion.div>

          {/* Calories Card */}
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="stat-icon">🔥</div>
            <div className="stat-content">
              <h3>Calories</h3>
              <div className="stat-value">{userData.caloriesBurned}</div>
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${calculateProgress(userData.caloriesBurned, userData.caloriesGoal)}%` }}
                ></div>
              </div>
              <div className="progress-text">
                {calculateProgress(userData.caloriesBurned, userData.caloriesGoal)}% of daily goal
              </div>
            </div>
          </motion.div>

          {/* Active Minutes Card */}
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <h3>Active Minutes</h3>
              <div className="stat-value">{userData.activeMinutes}</div>
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${calculateProgress(userData.activeMinutes, userData.activeMinutesGoal)}%` }}
                ></div>
              </div>
              <div className="progress-text">
                {calculateProgress(userData.activeMinutes, userData.activeMinutesGoal)}% of daily goal
              </div>
            </div>
          </motion.div>

          {/* Heart Rate Card */}
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="stat-icon">❤️</div>
            <div className="stat-content">
              <h3>Heart Rate</h3>
              <div className="stat-value">{userData.heartRate} <span className="stat-unit">bpm</span></div>
              <div className="stat-info">Resting heart rate</div>
            </div>
          </motion.div>

          {/* Sleep Card */}
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="stat-icon">😴</div>
            <div className="stat-content">
              <h3>Sleep</h3>
              <div className="stat-value">{userData.sleep} <span className="stat-unit">hrs</span></div>
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${calculateProgress(userData.sleep, userData.sleepGoal)}%` }}
                ></div>
              </div>
              <div className="progress-text">
                {calculateProgress(userData.sleep, userData.sleepGoal)}% of goal
              </div>
            </div>
          </motion.div>

          {/* Water Intake Card */}
          <motion.div 
            className="stat-card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="stat-icon">💧</div>
            <div className="stat-content">
              <h3>Water</h3>
              <div className="stat-value">{userData.waterIntake} <span className="stat-unit">glasses</span></div>
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${calculateProgress(userData.waterIntake, userData.waterIntakeGoal)}%` }}
                ></div>
              </div>
              <div className="progress-text">
                {calculateProgress(userData.waterIntake, userData.waterIntakeGoal)}% of daily goal
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Exercise Tracking */}
      <motion.section 
        className="exercise-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2>Exercise Tracking</h2>
        
        {/* Add Exercise Form */}
        <div className="add-exercise-container">
          <h3>Add New Exercise</h3>
          <form className="add-exercise-form" onSubmit={handleAddExercise}>
            <div className="form-group">
              <label>Exercise Name</label>
              <input 
                type="text" 
                name="name" 
                value={newExercise.name} 
                onChange={handleExerciseChange} 
                placeholder="e.g. Running, Yoga..." 
                required 
              />
            </div>
            <div className="form-group">
              <label>Duration (minutes)</label>
              <input 
                type="number" 
                name="duration" 
                value={newExercise.duration} 
                onChange={handleExerciseChange} 
                placeholder="30" 
                required 
              />
            </div>
            <div className="form-group">
              <label>Calories Burned</label>
              <input 
                type="number" 
                name="calories" 
                value={newExercise.calories} 
                onChange={handleExerciseChange} 
                placeholder="200" 
                required 
              />
            </div>
            <button type="submit" className="submit-btn">Add Exercise</button>
          </form>
        </div>

        {/* Exercise History */}
        <div className="exercise-history">
          <h3>Recent Exercises</h3>
          <div className="exercise-list">
            {exercises.map(exercise => (
              <motion.div 
                key={exercise.id} 
                className="exercise-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="exercise-icon">
                  {exercise.name.toLowerCase().includes('run') ? '🏃‍♂️' : 
                   exercise.name.toLowerCase().includes('yoga') ? '🧘‍♀️' : 
                   exercise.name.toLowerCase().includes('weight') ? '🏋️‍♂️' : 
                   exercise.name.toLowerCase().includes('swim') ? '🏊‍♂️' : 
                   exercise.name.toLowerCase().includes('bike') ? '🚴‍♂️' : '💪'}
                </div>
                <div className="exercise-details">
                  <h4>{exercise.name}</h4>
                  <div className="exercise-stats">
                    <span className="exercise-duration">{exercise.duration} mins</span>
                    <span className="exercise-calories">{exercise.calories} calories</span>
                    <span className="exercise-date">{exercise.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Goal Setting */}
      <motion.section 
        className="goals-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <h2>Fitness Goals</h2>
        <div className="goals-grid">
          <div className="goal-card">
            <h3>Daily Step Goal</h3>
            <div className="goal-value">{userData.dailyStepsGoal.toLocaleString()}</div>
            <div className="goal-progress">
              <div className="progress-ring-container">
                <svg className="progress-ring" width="120" height="120">
                  <circle
                    className="progress-ring-circle-bg"
                    stroke="#e6e6e6"
                    strokeWidth="10"
                    fill="transparent"
                    r="50"
                    cx="60"
                    cy="60"
                  />
                  <circle
                    className="progress-ring-circle"
                    stroke="#4CAF50"
                    strokeWidth="10"
                    fill="transparent"
                    r="50"
                    cx="60"
                    cy="60"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - calculateProgress(userData.dailySteps, userData.dailyStepsGoal) / 100)}`}
                  />
                </svg>
                <div className="progress-ring-text">
                  {calculateProgress(userData.dailySteps, userData.dailyStepsGoal)}%
                </div>
              </div>
            </div>
          </div>
          
          <div className="goal-card">
            <h3>Weekly Active Minutes</h3>
            <div className="goal-value">{userData.activeMinutesGoal * 7}</div>
            <div className="weekly-progress">
              <div className="day-progress">
                <div className="day-label">M</div>
                <div className="day-bar-container">
                  <div className="day-bar" style={{ height: '70%' }}></div>
                </div>
              </div>
              <div className="day-progress">
                <div className="day-label">T</div>
                <div className="day-bar-container">
                  <div className="day-bar" style={{ height: '85%' }}></div>
                </div>
              </div>
              <div className="day-progress">
                <div className="day-label">W</div>
                <div className="day-bar-container">
                  <div className="day-bar" style={{ height: '60%' }}></div>
                </div>
              </div>
              <div className="day-progress">
                <div className="day-label">T</div>
                <div className="day-bar-container">
                  <div className="day-bar" style={{ height: '75%' }}></div>
                </div>
              </div>
              <div className="day-progress">
                <div className="day-label">F</div>
                <div className="day-bar-container">
                  <div className="day-bar" style={{ height: '80%' }}></div>
                </div>
              </div>
              <div className="day-progress">
                <div className="day-label">S</div>
                <div className="day-bar-container">
                  <div className="day-bar" style={{ height: '45%' }}></div>
                </div>
              </div>
              <div className="day-progress">
                <div className="day-label">S</div>
                <div className="day-bar-container">
                  <div className="day-bar active" style={{ height: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Device Integration Section */}
      <motion.section 
        className="integrations-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2>Connect Devices</h2>
        <div className="integration-cards">
          <motion.div
            className="fitness-card google-fit"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="integration-logo">
              <span className="logo-icon">G</span>
            </div>
            <h3>Google Fit</h3>
            <p>Track your steps, calories, heart rate, and more.</p>
            <button className="connect-btn">Connect to Google Fit</button>
          </motion.div>

          <motion.div
            className="fitness-card fitbit"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="integration-logo">
              <span className="logo-icon">F</span>
            </div>
            <h3>Fitbit</h3>
            <p>Monitor sleep, activity, and health metrics.</p>
            <button className="connect-btn">Connect to Fitbit</button>
          </motion.div>

          <motion.div
            className="fitness-card apple-health"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="integration-logo">
              <span className="logo-icon">A</span>
            </div>
            <h3>Apple Health</h3>
            <p>Sync all your health and activity data.</p>
            <button className="connect-btn">Connect to Apple Health</button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default FitnessTracker;