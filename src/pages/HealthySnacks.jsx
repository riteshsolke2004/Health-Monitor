import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "./HealthySnacks.css";

const HealthySnacks = () => {
  return (
    <div className="healthy-snacks-container">
      {/* Hero Section with 3D Animation */}
      <header className="hero-section">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 3, 1]} />
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="#FFA726"
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
          Healthy Snacks 🍏
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover nutritious and delicious snacks to keep you energized.
        </motion.p>
      </header>

      {/* Snack Benefits Section */}
      <motion.section
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>🍎 Why Choose Healthy Snacks?</h2>
        <p>Snacking smart helps maintain energy levels, supports metabolism, and improves focus. Avoid processed foods and go for natural, nutrient-rich choices.</p>
      </motion.section>

      {/* Snack List with 3D Hover Effects */}
      <section className="snack-list-section">
        <h2>🥗 Top 5 Nutritious Snacks</h2>
        <div className="snack-grid">
          {[
            { name: "Nuts & Seeds", emoji: "🥜", desc: "High in protein, fiber, and healthy fats." },
            { name: "Fresh Fruits", emoji: "🍎", desc: "Loaded with vitamins, antioxidants, and fiber." },
            { name: "Greek Yogurt", emoji: "🍶", desc: "Rich in probiotics, calcium, and protein." },
            { name: "Avocado Toast", emoji: "🥑", desc: "Packed with healthy fats and fiber." },
            { name: "Hummus & Veggies", emoji: "🥗", desc: "Protein-packed with fiber-rich veggies." }
          ].map((snack, index) => (
            <motion.div
              key={index}
              className="snack-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{snack.emoji} {snack.name}</h3>
              <p>{snack.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="benefits-section">
        <h2>🌟 Health Benefits of Smart Snacking</h2>
        <ul>
          <li>⚡ **Boosts Energy** – Avoid crashes with natural nutrients.</li>
          <li>🧠 **Improves Focus** – Keeps your mind sharp and alert.</li>
          <li>❤️ **Supports Heart Health** – Lowers cholesterol and regulates blood sugar.</li>
          <li>🍽 **Aids Digestion** – Promotes gut health and prevents overeating.</li>
        </ul>
      </section>

      {/* FAQ Section with Smooth Expand Animation */}
      <section className="faq-section">
        <h2>🤔 Frequently Asked Questions</h2>
        {[
          { q: "What is the healthiest snack?", a: "Fresh fruits, nuts, and Greek yogurt are great options." },
          { q: "How often should I snack?", a: "Snack every 3-4 hours to maintain stable energy." },
          { q: "Are snacks good for weight loss?", a: "Yes! High-fiber, protein-rich snacks help with appetite control." }
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
        <h2>🥦 Eat Smart, Stay Healthy</h2>
        <p>Incorporate healthy snacks into your daily routine.</p>
        <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
          Explore More
        </motion.button>
      </motion.section>
    </div>
  );
};

export default HealthySnacks;
