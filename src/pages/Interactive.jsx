import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "./Interactive.css";

const Interactive = () => {
  return (
    <div className="interactive-container">
      {/* Hero Section with 3D Sphere Animation */}
      <header className="hero-section">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 3, 1]} />
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="#3498db"
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
          Interactive Health Hub ⚕️
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Explore AI-driven interactive health insights & tools.
        </motion.p>
      </header>

      {/* Feature Cards Section */}
      <section className="interactive-features">
        <h2>🌟 Smart Health Features</h2>
        <div className="feature-grid">
          {[
            { title: "AI Health Chatbot", icon: "🤖", desc: "Get instant AI-powered medical guidance." },
            { title: "Live Health Monitoring", icon: "📊", desc: "Track vitals like heart rate & blood pressure." },
            { title: "Symptom Checker", icon: "🔍", desc: "Analyze symptoms & get medical insights." },
            { title: "Fitness Tracker", icon: "🏃", desc: "Monitor workouts & set health goals." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{feature.icon} {feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Dashboard Section */}
      <section className="dashboard-section">
        <h2>📈 Personalized Health Insights</h2>
        <div className="dashboard-grid">
          <motion.div
            className="dashboard-box heart-rate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3>❤️ Heart Rate</h3>
            <p>72 BPM - Normal</p>
          </motion.div>
          <motion.div
            className="dashboard-box blood-pressure"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3>🩸 Blood Pressure</h3>
            <p>120/80 mmHg - Normal</p>
          </motion.div>
          <motion.div
            className="dashboard-box oxygen-level"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3>🌬 Oxygen Level</h3>
            <p>98% - Healthy</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2>🚀 Take Control of Your Health</h2>
        <p>Monitor & improve your wellness with interactive AI tools.</p>
        <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
          Start Now
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Interactive;
