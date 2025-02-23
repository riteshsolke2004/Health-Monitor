import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "./Recommendation.css";

const Recommendation = () => {
  return (
    <div className="recommendation-container">
      {/* Hero Section with 3D Animation */}
      <header className="hero-section">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 3, 1]} />
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="#FF6F61"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Personalized Health Recommendations 🏥
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Get AI-powered insights to improve your health.
        </motion.p>
      </header>

      {/* Key Benefits Section */}
      <motion.section
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>🔍 Why Personalized Recommendations?</h2>
        <p>
          AI-driven insights provide tailored health advice, helping you improve
          lifestyle habits and prevent potential health issues.
        </p>
      </motion.section>

      {/* Recommendations List with 3D Hover Effects */}
      <section className="recommendations-list-section">
        <h2>🌿 Top Health Recommendations</h2>
        <div className="recommendation-grid">
          {[
            { name: "Stay Hydrated", emoji: "💧", desc: "Drink at least 8 glasses of water daily." },
            { name: "Regular Exercise", emoji: "🏋️", desc: "Engage in physical activity for 30 minutes daily." },
            { name: "Balanced Diet", emoji: "🥗", desc: "Eat a variety of nutritious foods for optimal health." },
            { name: "Quality Sleep", emoji: "🛏️", desc: "Ensure 7-9 hours of sleep for recovery." },
            { name: "Mental Wellness", emoji: "🧘", desc: "Practice meditation and mindfulness for stress relief." }
          ].map((rec, index) => (
            <motion.div
              key={index}
              className="recommendation-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{rec.emoji} {rec.name}</h3>
              <p>{rec.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI-Based Recommendations Section */}
      <section className="ai-section">
        <h2>🤖 AI-Powered Insights</h2>
        <p>
          Our AI analyzes your health data to generate personalized
          recommendations that suit your unique needs.
        </p>
      </section>

      {/* FAQ Section with Smooth Expand Animation */}
      <section className="faq-section">
        <h2>❓ Frequently Asked Questions</h2>
        {[
          { q: "How does AI generate recommendations?", a: "AI analyzes your health data and habits to provide personalized insights." },
          { q: "Are these recommendations medically approved?", a: "All insights are backed by medical research and expert consultation." },
          { q: "How can I track my progress?", a: "Use our dashboard to monitor improvements over time." }
        ].map((faq, index) => (
          <motion.details key={index} whileTap={{ scale: 0.98 }}>
            <summary>{faq.q}</summary>
            <p>{faq.a}</p>
          </motion.details>
        ))}
      </section>

      {/* Call to Action */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2>💡 Improve Your Health Today!</h2>
        <p>Start following personalized recommendations for a better lifestyle.</p>
        <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
          Get Started
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Recommendation;
