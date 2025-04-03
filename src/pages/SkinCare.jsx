import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot, MeshWobbleMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import "./SkinCare.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const SkinCare = () => {
  return (
    <div className="skin-care-container">
      {/* Hero Section with 3D Background */}
      <header className="hero-section">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 3, 1]} />
          <TorusKnot args={[1, 0.4, 100, 16]} scale={2.5}>
            <MeshWobbleMaterial color="#FF6F61" factor={1} speed={1} />
          </TorusKnot>
        </Canvas>
        <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
          Skin Care 🌿
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeInUp}>
          Your ultimate guide to healthy and glowing skin
        </motion.p>
      </header>

      {/* Why Skin Care Matters */}
      <motion.section className="section" initial="hidden" whileInView="visible" variants={fadeInUp}>
        <h2>🌟 Why Skin Care Matters</h2>
        <p>Taking care of your skin prevents issues, slows aging, and enhances confidence.</p>
      </motion.section>

      {/* Skin Care Tips */}
      <motion.section className="tips-section" initial="hidden" whileInView="visible" variants={fadeInUp}>
        <h2>✨ Top Skin Care Tips</h2>
        <div className="tips-grid">
          {[
            { title: "💦 Stay Hydrated", desc: "Drink water to keep your skin naturally moisturized." },
            { title: "🧴 Use Sunscreen", desc: "Protect from UV rays to prevent premature aging." },
            { title: "🥗 Eat Healthy", desc: "Include fruits, veggies, and antioxidants in your diet." },
            { title: "🛌 Get Enough Sleep", desc: "Helps repair and rejuvenate skin cells overnight." }
          ].map((tip, index) => (
            <motion.div key={index} className="tip-card" whileHover={{ scale: 1.05 }}>
              <h3>{tip.title}</h3>
              <p>{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section className="cta-section" initial="hidden" whileInView="visible" variants={fadeInUp}>
        <h2>🌼 Take Control of Your Skin Health</h2>
        <p>Start your personalized skincare routine today!</p>
        <motion.button className="cta-button" whileHover={{ scale: 1.1 }}>
          Learn More
        </motion.button>
      </motion.section>
    </div>
  );
};

export default SkinCare;
