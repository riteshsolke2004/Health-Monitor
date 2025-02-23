import React, { useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "./NewRecord.css";

const NewRecord = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    bloodPressure: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Health Record:", formData);
    alert("Health record submitted successfully!");
  };

  return (
    <div className="new-record-container">
      {/* Hero Section with 3D Animation */}
      <header className="record-hero">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 3, 1]} />
          <Sphere args={[1, 100, 200]} scale={1.8}>
            <MeshDistortMaterial color="#2ecc71" distort={0.5} speed={2} />
          </Sphere>
        </Canvas>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          New Health Record 📋
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Keep track of your health records easily.
        </motion.p>
      </header>

      {/* Health Record Form */}
      <motion.section
        className="record-form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>📝 Enter Your Health Details</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
          <input type="text" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} required />
          <input type="text" name="bloodPressure" placeholder="Blood Pressure (e.g., 120/80)" value={formData.bloodPressure} onChange={handleChange} required />
          <textarea name="symptoms" placeholder="Describe your symptoms..." value={formData.symptoms} onChange={handleChange} required />
          <motion.button whileHover={{ scale: 1.1 }} className="submit-button">
            Submit Record
          </motion.button>
        </form>
      </motion.section>

      {/* Records List Section */}
      <section className="record-info">
        <h2>📂 Why Keep Health Records?</h2>
        <ul>
          <li>📊 **Monitor Health Trends** – Track changes over time.</li>
          <li>💉 **Better Diagnosis** – Helps doctors understand history.</li>
          <li>🩺 **Personalized Treatment** – Improves healthcare decisions.</li>
          <li>⏳ **Faster Medical Assistance** – Quick access during emergencies.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2>📑 Keep Your Health Data Organized</h2>
        <p>Start tracking your health records today.</p>
        <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
          View Records
        </motion.button>
      </motion.section>
    </div>
  );
};

export default NewRecord;
