import React from "react";
import "./ProtectYourSkin.css";

const ProtectYourSkin = () => {
  return (
    <div className="protect-skin-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Protect Your Skin</h1>
        <p>Essential tips to safeguard your skin from harmful UV rays.</p>
      </header>

      {/* Why Skin Protection is Important */}
      <section className="section">
        <h2>Why Skin Protection Matters</h2>
        <p>Exposure to harmful UV rays can cause premature aging, sunburn, and even skin cancer. Taking preventive measures is essential for long-term skin health.</p>
      </section>

      {/* Skin Protection Tips */}
      <section className="tips-section">
        <h2>Best Ways to Protect Your Skin</h2>
        <div className="tips-grid">
          <div className="tip">
            <h3>☀️ Apply Sunscreen</h3>
            <p>Use SPF 30+ sunscreen daily, even on cloudy days.</p>
          </div>
          <div className="tip">
            <h3>🕶️ Wear Sunglasses</h3>
            <p>Protect your eyes and prevent wrinkles with UV-protected glasses.</p>
          </div>
          <div className="tip">
            <h3>👒 Use Hats & Cover-ups</h3>
            <p>Wear wide-brimmed hats and light clothing to block harmful rays.</p>
          </div>
          <div className="tip">
            <h3>⏳ Avoid Peak Sun Hours</h3>
            <p>Stay indoors or in shade between 10 AM - 4 PM when UV is strongest.</p>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="products-section">
        <h2>Best Skin Protection Products</h2>
        <ul>
          <li>🧴 **Broad Spectrum Sunscreen (SPF 50)** – Protects against UVA & UVB</li>
          <li>🧥 **UV-Blocking Clothing** – Lightweight and breathable protection</li>
          <li>👓 **Polarized Sunglasses** – Reduces glare and shields from harmful light</li>
          <li>💦 **Aloe Vera Gel** – Soothes sunburn and hydrates skin</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>Can I skip sunscreen on cloudy days?</summary>
          <p>No, up to 80% of UV rays still penetrate clouds, so sunscreen is a must.</p>
        </details>
        <details>
          <summary>What SPF should I use daily?</summary>
          <p>Dermatologists recommend SPF 30 or higher for daily protection.</p>
        </details>
        <details>
          <summary>How often should I reapply sunscreen?</summary>
          <p>Reapply every 2 hours, or immediately after swimming or sweating.</p>
        </details>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Stay Safe, Stay Protected</h2>
        <p>Make skin protection a daily habit for a healthier future.</p>
        <button className="cta-button">Learn More</button>
      </section>
    </div>
  );
};

export default ProtectYourSkin;
