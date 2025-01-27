import React from 'react';
import './Recommendations.css';

const Recommendations = () => {
  return (
    <div className="recommendations">
      <h1>Healthy Living Tips</h1>
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card green-card">
          <img src="vegetables.jpg" alt="Eat More Vegetables" />
          <h3>Eat More Vegetables</h3>
          <p>
            Incorporate a variety of vegetables into your meals to ensure you get essential nutrients and fibers.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="running.jpg" alt="Stay Active" />
          <h3>Stay Active</h3>
          <p>
            Engage in regular physical activity to improve cardiovascular health and overall well-being.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card grey-card">
          <img src="meditation.jpg" alt="Practice Mindfulness" />
          <h3>Practice Mindfulness</h3>
          <p>
            Incorporate mindfulness practices like meditation to reduce stress and enhance mental clarity.
          </p>
        </div>
      </div>

      <footer className="footer">
        <p>HealthHub</p>
        <p>Your go-to resource for healthy living tips and advice.</p>
        <div className="quick-links">
          <p><a href="#about">About Us</a></p>
          <p><a href="#contact">Contact</a></p>
          <p><a href="#privacy">Privacy Policy</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Recommendations;
