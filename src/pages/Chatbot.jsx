import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { FiSend } from "react-icons/fi";
import axios from "axios"; // For API Requests
import "./Chatbot.css";

const Chatbot = () => {
  // Replace this with your actual Google Gemini API Key
  const API_KEY = "AIzaSyCMXSeTBcHZOQ9NhJ033PatOEynyaiJD-E";  
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today? 😊", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Function to Send Message & Get Response from Google Gemini AI
  const handleSendMessage = async () => {
    if (input.trim() === "") return;
  
    // Add User Message to Chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
  
    try {
      // Make API Call to Google Gemini with a system instruction
      const response = await axios.post(API_URL, {
        contents: [
          {
            parts: [
              { text: "You are an AI doctor providing medical guidance with simple and ease that an way that idiot also can understand give small outputs as answer " },
              { text: input }
            ]
          }
        ]
      });
  
      // Extract Response
      const botResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
                          "I'm here to provide medical advice. However, always consult a certified doctor for serious conditions. 🤖";
  
      // Add Bot Response to Chat
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { text: "Error: Unable to fetch response.", sender: "bot" }]);
    }
  };
  

  // Auto Scroll to Latest Message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbot-container">
      {/* Hero Section with 3D Animation */}
      <header className="chatbot-hero">
        <Canvas className="chatbot-canvas">
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 3, 1]} />
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="#4E9F3D"
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
          AI Chat Assistant 🤖
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Get real-time AI assistance powered by Gemini AI.
        </motion.p>
      </header>

      {/* Chatbox Section */}
      <section className="chatbox">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`chat-message ${msg.sender}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {msg.text}
            </motion.div>
          ))}
          <div ref={chatEndRef} />
        </div>
        
        {/* Input Section */}
        <div className="chat-input-container">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="send-button"
            onClick={handleSendMessage}
          >
            <FiSend />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Chatbot;
