import React from "react";
import "./Workout.css";

const Workout = () => {
  return (
    <div className="workout-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Stay Fit with Daily Workouts</h1>
        <p>Boost your energy, improve your health, and stay active with simple exercises.</p>
      </header>

      {/* Why Exercise is Important */}
      <section className="section">
        <h2>Why Workouts Matter</h2>
        <p>Regular exercise improves heart health, builds strength, boosts mental well-being, and helps maintain a healthy weight.</p>
      </section>

      {/* Workout Tips */}
      <section className="tips-section">
        <h2>Best Workout Tips</h2>
        <div className="tips-grid">
          <div className="tip">
            <h3>🏃‍♂️ Warm-Up First</h3>
            <p>Start with light stretching to prevent injuries.</p>
          </div>
          <div className="tip">
            <h3>💪 Strength Training</h3>
            <p>Include bodyweight exercises like squats, push-ups, and planks.</p>
          </div>
          <div className="tip">
            <h3>🚴‍♀️ Stay Active</h3>
            <p>Try cardio exercises like jogging, cycling, or skipping rope.</p>
          </div>
          <div className="tip">
            <h3>💧 Hydration is Key</h3>
            <p>Drink water before, during, and after your workout.</p>
          </div>
        </div>
      </section>

      {/* Recommended Exercises */}
      <section className="products-section">
        <h2>Best Exercises for Daily Fitness</h2>
        <ul>
          <li>🏋️‍♂️ **Squats** – Strengthens legs and core</li>
          <li>🏃‍♀️ **Jump Rope** – Great for cardio and coordination</li>
          <li>🧘 **Yoga Poses** – Improves flexibility and mental calmness</li>
          <li>🚶‍♂️ **Brisk Walking** – Easy way to stay active daily</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>How long should I work out daily?</summary>
          <p>At least 30 minutes of moderate exercise is recommended per day.</p>
        </details>
        <details>
          <summary>Can I work out without equipment?</summary>
          <p>Yes! Bodyweight exercises like push-ups and squats are effective.</p>
        </details>
        <details>
          <summary>What is the best time to exercise?</summary>
          <p>Morning workouts boost energy, but consistency is more important than timing.</p>
        </details>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Start Your Fitness Journey Today</h2>
        <p>Consistency is key! Make workouts a part of your daily routine.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default Workout;
