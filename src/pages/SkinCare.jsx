import React from "react";
import "./SkinCare.css";

const SkinCare = () => {
  return (
    <div className="skin-care-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Skin Care 101</h1>
        <p>Your ultimate guide to healthy and glowing skin</p>
      </header>

      {/* About Skin Care */}
      <section className="section">
        <h2>Why Skin Care Matters</h2>
        <p>Taking care of your skin is essential for overall health and well-being. Proper skincare helps prevent skin issues, slows aging, and enhances confidence.</p>
      </section>

      {/* Skin Care Tips */}
      <section className="tips-section">
        <h2>Top Skin Care Tips</h2>
        <div className="tips-grid">
          <div className="tip">
            <h3>💦 Stay Hydrated</h3>
            <p>Drink plenty of water to keep your skin naturally moisturized.</p>
          </div>
          <div className="tip">
            <h3>🧴 Use Sunscreen</h3>
            <p>Protect your skin from harmful UV rays to prevent premature aging.</p>
          </div>
          <div className="tip">
            <h3>🥗 Eat Healthy</h3>
            <p>Incorporate fruits, vegetables, and antioxidants into your diet.</p>
          </div>
          <div className="tip">
            <h3>🛌 Get Enough Sleep</h3>
            <p>Sleep helps repair and rejuvenate skin cells overnight.</p>
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="ingredients-section">
        <h2>Best Natural Ingredients for Skin</h2>
        <ul>
          <li>🌿 Aloe Vera – Soothes and hydrates</li>
          <li>🍯 Honey – Natural antibacterial and moisturizer</li>
          <li>🥑 Avocado – Rich in healthy fats for nourishment</li>
          <li>🍊 Vitamin C – Helps in brightening and reducing pigmentation</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>How often should I wash my face?</summary>
          <p>Twice a day, in the morning and before bed, to remove dirt and oil.</p>
        </details>
        <details>
          <summary>Is sunscreen necessary indoors?</summary>
          <p>Yes, UV rays can penetrate windows, so daily sunscreen use is recommended.</p>
        </details>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Take Control of Your Skin Health</h2>
        <p>Start your personalized skincare routine today!</p>
        <button className="cta-button">Learn More</button>
      </section>
    </div>
  );
};

export default SkinCare;
