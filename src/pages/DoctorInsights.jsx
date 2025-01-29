import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "./DoctorInsights.css";

const DoctorInsights = () => {
  return (
    <div className="doctor-insights-container">
      {/* Hero Section with 3D Sphere */}
      <div className="hero-section">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 3, 1]} />
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="#6EC6FF"
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
          Doctor Insights
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Expert advice for maintaining a healthy lifestyle.
        </motion.p>
      </div>

      {/* Insights Section */}
      <motion.section
        className="insights-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>💡 Key Health Insights from Experts</h2>
        <div className="insight-cards">
          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>🥗 Nutrition & Diet</h3>
            <p>Balanced meals boost immunity, energy, and mental clarity.</p>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>💤 Sleep & Recovery</h3>
            <p>Quality sleep is key to stress management and longevity.</p>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>🏋️‍♂️ Exercise & Mobility</h3>
            <p>Daily movement improves heart health and mental well-being.</p>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>🧠 Mental Wellness</h3>
            <p>Meditation, mindfulness, and therapy enhance well-being.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2>👨‍⚕️ Get Personalized Advice</h2>
        <p>Schedule an online consultation with a certified doctor.</p>
        <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
          Book a Consultation
        </motion.button>
      </motion.section>
    </div>
  );
};

export default DoctorInsights;
