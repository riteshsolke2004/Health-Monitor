import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Recommendations.css";

const Recommendations = () => {
  // Recommendations data
  const tips = [
    {
      id: 1,
      title: "Stay Hydrated 💧",
      desc: "Drink at least 8-10 glasses of water daily to keep your body hydrated.",
      category: "nutrition",
      importance: "high",
      completionStatus: false,
    },
    {
      id: 2,
      title: "Balanced Diet 🥗",
      desc: "Include fruits, vegetables, proteins, and grains in your meals.",
      category: "nutrition",
      importance: "high",
      completionStatus: false,
    },
    {
      id: 3,
      title: "Regular Exercise 🏃‍♂️",
      desc: "Engage in 30 mins of physical activity 5 times a week.",
      category: "fitness",
      importance: "high",
      completionStatus: false,
    },
    {
      id: 4,
      title: "Adequate Sleep 💤",
      desc: "Get 7-9 hours of good quality sleep every night.",
      category: "wellness",
      importance: "medium",
      completionStatus: false,
    },
    {
      id: 5,
      title: "Mental Health 🧠",
      desc: "Practice mindfulness, meditation or talk to someone regularly.",
      category: "wellness",
      importance: "medium",
      completionStatus: false,
    },
    {
      id: 6,
      title: "Limit Screen Time 📱",
      desc: "Take breaks from screens every hour and minimize usage before bed.",
      category: "wellness",
      importance: "medium",
      completionStatus: false,
    },
    {
      id: 7,
      title: "Strength Training 💪",
      desc: "Include weightlifting or resistance training 2-3 times weekly.",
      category: "fitness",
      importance: "medium",
      completionStatus: false,
    },
    {
      id: 8,
      title: "Reduce Sugar Intake 🍭",
      desc: "Lower added sugar consumption to under 25g daily for optimal health.",
      category: "nutrition",
      importance: "high",
      completionStatus: false,
    },
  ];

  // State for filtering and tracking completed recommendations
  const [filter, setFilter] = useState("all");
  const [recommendationData, setRecommendationData] = useState(tips);
  const [progressPercentage, setProgressPercentage] = useState(0);

  // Filter recommendations based on category
  const filteredTips = filter === "all" 
    ? recommendationData 
    : recommendationData.filter(tip => tip.category === filter);

  // Handle toggling recommendation completion
  const toggleComplete = (id) => {
    const updatedData = recommendationData.map(tip => {
      if (tip.id === id) {
        return {...tip, completionStatus: !tip.completionStatus};
      }
      return tip;
    });
    
    setRecommendationData(updatedData);
    
    // Calculate progress percentage
    const completedCount = updatedData.filter(tip => tip.completionStatus).length;
    const newProgressPercentage = Math.round((completedCount / updatedData.length) * 100);
    setProgressPercentage(newProgressPercentage);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <div className="recommendations-page">
      <motion.div 
        className="recommendations-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>📝 Personalized Health Recommendations</h2>
        <p className="recommendations-subtitle">Based on your health profile and activities</p>
      </motion.div>

      {/* Progress Tracker */}
      <motion.div 
        className="progress-tracker"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="progress-text">
          <h3>Your Progress</h3>
          <span className="progress-percentage">{progressPercentage}%</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="progress-message">
          {progressPercentage < 30 ? "Just getting started! Keep going." :
           progressPercentage < 70 ? "Good progress! You're on your way to better health." :
           "Excellent work! You're making great strides toward optimal health."}
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div 
        className="filter-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'nutrition' ? 'active' : ''}`} 
          onClick={() => setFilter('nutrition')}
        >
          Nutrition
        </button>
        <button 
          className={`filter-btn ${filter === 'fitness' ? 'active' : ''}`} 
          onClick={() => setFilter('fitness')}
        >
          Fitness
        </button>
        <button 
          className={`filter-btn ${filter === 'wellness' ? 'active' : ''}`} 
          onClick={() => setFilter('wellness')}
        >
          Wellness
        </button>
      </motion.div>

      {/* Recommendations List */}
      <motion.div 
        className="tips-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredTips.map((tip) => (
          <motion.div 
            key={tip.id} 
            className={`tip-card ${tip.completionStatus ? 'completed' : ''}`}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
            }}
            onClick={() => toggleComplete(tip.id)}
          >
            <div className="tip-header">
              <h3>{tip.title}</h3>
              <span className={`importance-badge ${tip.importance}`}>
                {tip.importance === "high" ? "Priority" : "Recommended"}
              </span>
            </div>
            <p>{tip.desc}</p>
            <div className="tip-footer">
              <span className="tip-category">{tip.category.charAt(0).toUpperCase() + tip.category.slice(1)}</span>
              <div className="completion-checkbox">
                <input 
                  type="checkbox" 
                  checked={tip.completionStatus} 
                  onChange={() => toggleComplete(tip.id)} 
                  id={`checkbox-${tip.id}`}
                />
                <label htmlFor={`checkbox-${tip.id}`}>
                  {tip.completionStatus ? "Completed" : "Mark Complete"}
                </label>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Information Section */}
      <motion.div 
        className="additional-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h3>Why These Recommendations?</h3>
        <p>
          These personalized recommendations are based on your current health metrics, activity 
          levels, and wellness goals. Following these suggestions can help improve your overall 
          physical and mental well-being over time.
        </p>
        <div className="action-buttons">
          <button className="action-btn primary">Save Recommendations</button>
          <button className="action-btn secondary">Share With Coach</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Recommendations;