import React, { useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import "./DoctorInsights.css";


const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, text, image, index }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <div className="testimonial-content">
        <p>"{text}"</p>
        <div className="testimonial-author">
          <div className="author-avatar">
            <img src={`src/assets/nilesh.jpg`} alt={name} />
            <img src={`src/assets/ritesh.jpg`} alt={name} />
            <img src={``} alt={name} />
            <img src={`/api/placeholder/60/60`} alt={name} />
          </div>
          <div className="author-info">
            <h4>{name}</h4>
            <span>{role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DoctorInsights = () => {
  const [activeTab, setActiveTab] = useState("insights");
  
  const testimonials = [
    {
      name: "Nilesh Dhole",
      role: "Student",
      text: "The personalized nutrition advice I received completely transformed my energy levels and focus at work.",
      image:"Nilesh"
    },
    {
      name: "Akanksha Lavale",
      role: "Student",
      text: "The recommendations of Doctor help's me to fast recovery.",
      image: ""
    },
    {
      name: "Ritesh Solke",
      role: "Student",
      text: "Following the sleep recommendations improved my productivity and creativity more than I ever expected.",
      image: ""
    },
    {
      name: "Sneha Jadhav",
      role: "Student",
      text: "The mental wellness techniques helped me manage classroom stress and be more present for my students.",
      image: ""
    }
    
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="doctor-insights-container">
      {/* Hero Section with 3D Sphere */}
      <div className="hero-section">
        <div className="hero-content">
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
            className="hero-subtitle"
          >
            Expert advice for maintaining a healthy lifestyle tailored to your needs
          </motion.p>
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </motion.div>
        </div>
        <div className="hero-visual">
          <Canvas className="canvas">
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 3, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="#4FA8FF"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.2}
              />
            </Sphere>
          </Canvas>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === "insights" ? "active" : ""}`}
          onClick={() => setActiveTab("insights")}
        >
          Key Insights
        </button>
        <button 
          className={`tab-button ${activeTab === "testimonials" ? "active" : ""}`}
          onClick={() => setActiveTab("testimonials")}
        >
          Patient Stories
        </button>
        <button 
          className={`tab-button ${activeTab === "doctors" ? "active" : ""}`}
          onClick={() => setActiveTab("doctors")}
        >
          Our Experts
        </button>
      </div>

      {/* Content Sections */}
      {activeTab === "insights" && (
        <motion.section
          className="insights-section"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2>💡 Key Health Insights from Experts</h2>
          <div className="insight-cards">
            <FeatureCard 
              icon="🥗"
              title="Nutrition & Diet"
              description="Personalized meal plans based on your body's unique needs to optimize health and energy levels."
              delay={0.1}
            />
            <FeatureCard 
              icon="💤"
              title="Sleep & Recovery"
              description="Science-backed techniques to improve sleep quality and enhance your body's natural recovery processes."
              delay={0.2}
            />
            <FeatureCard 
              icon="🏋️‍♂️"
              title="Exercise & Mobility"
              description="Custom fitness regimens that fit your lifestyle and help prevent injuries while building strength."
              delay={0.3}
            />
            <FeatureCard 
              icon="🧠"
              title="Mental Wellness"
              description="Evidence-based strategies for stress reduction, focus enhancement, and emotional balance."
              delay={0.4}
            />
            <FeatureCard 
              icon="💊"
              title="Preventive Care"
              description="Proactive health monitoring and early intervention strategies to prevent illness."
              delay={0.5}
            />
            <FeatureCard 
              icon="🔬"
              title="Medical Innovations"
              description="Stay informed about cutting-edge treatments and health technologies relevant to your needs."
              delay={0.6}
            />
          </div>
        </motion.section>
      )}

      {activeTab === "testimonials" && (
        <motion.section
          className="testimonials-section"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2>⭐ Patient Success Stories</h2>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
                image={testimonial.image}
                index={index}
              />
            ))}
          </div>
        </motion.section>
      )}

      {activeTab === "doctors" && (
        <motion.section
          className="doctors-section"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2>👨‍⚕️ Meet Our Expert Doctors</h2>
          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-image">
                <img src="https://t4.ftcdn.net/jpg/01/36/18/77/360_F_136187711_qeBMOwkPdTg1dCN8e5TR1AmduXDz60Xn.jpg" alt="Dr. James Wilson" />
              </div>
              <h3>Dr. James Wilson</h3>
              <p className="specialty">Cardiology</p>
              <p>Specializing in preventive heart care and lifestyle modifications for optimal cardiovascular health.</p>
              <button className="book-button">Book Appointment</button>
            </div>
            <div className="doctor-card">
              <div className="doctor-image">
                <img src="https://www.shutterstock.com/image-photo/head-shot-woman-wearing-white-600nw-1529466836.jpg" alt="Dr. Maria Garcia" />
              </div>
              <h3>Dr. Maria Garcia</h3>
              <p className="specialty">Nutrition Science</p>
              <p>Expert in dietary interventions for chronic conditions and personalized nutrition plans.</p>
              <button className="book-button">Book Appointment</button>
            </div>
            <div className="doctor-card">
              <div className="doctor-image">
                <img src="https://www.shutterstock.com/image-photo/portrait-happy-friendly-male-indian-260nw-2033522228.jpg" alt="Dr. Ahmed Hassan" />
              </div>
              <h3>Dr. Ahmed Hassan</h3>
              <p className="specialty">Sleep Medicine</p>
              <p>Specialized in sleep disorders and integration of sleep optimization with overall health.</p>
              <button className="book-button">Book Appointment</button>
            </div>
          </div>
        </motion.section>
      )}

      {/* Call to Action */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="cta-content">
          <h2>👨‍⚕️ Get Personalized Health Advice</h2>
          <p>Schedule a virtual consultation with a certified doctor who specializes in your area of concern.</p>
          <ul className="cta-benefits">
            <li>✅ Personalized health assessments</li>
            <li>✅ Custom wellness plans</li>
            <li>✅ 24/7 doctor support</li>
            <li>✅ Secure medical records</li>
          </ul>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="cta-button"
          >
            Book Your Consultation
          </motion.button>
        </div>
        <div className="cta-image">
          <img src="https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE=" alt="Doctor consultation" />
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section 
        className="newsletter-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Stay Updated with Health Tips</h3>
        <p>Get weekly insights from our medical experts directly to your inbox.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </motion.section>
    </div>
  );
};

export default DoctorInsights;