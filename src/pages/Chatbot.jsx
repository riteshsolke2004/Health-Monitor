import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  // Replace this with your actual Google Gemini API Key
  const API_KEY = "AIzaSyCMXSeTBcHZOQ9NhJ033PatOEynyaiJD-E";  
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today? 😊", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Function to Send Message & Get Response from Google Gemini AI
  const handleSendMessage = async () => {
    if (input.trim() === "") return;
  
    // Add User Message to Chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
  
    try {
      // Format request according to Gemini API specifications
      const requestData = {
        contents: [
          {
            parts: [
              {
                text: "You are an AI doctor providing medical guidance in a simple and easy way. Keep responses brief and understandable. The user asks: " + input
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 800
        }
      };

      console.log("Sending request to Gemini API:", requestData);
      
      // Make API Call to Google Gemini
      const response = await axios.post(API_URL, requestData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log("Received response:", response.data);
  
      // Extract Response Text
      let botResponseText = "";
      
      if (response.data && 
          response.data.candidates && 
          response.data.candidates[0] && 
          response.data.candidates[0].content && 
          response.data.candidates[0].content.parts && 
          response.data.candidates[0].content.parts[0]) {
        botResponseText = response.data.candidates[0].content.parts[0].text;
      } else {
        botResponseText = "I'm having trouble processing your request. Please try again with a different question.";
        console.error("Unexpected API response structure:", response.data);
      }
  
      // Add Bot Response to Chat
      setMessages((prev) => [...prev, { text: botResponseText, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      
      // More detailed error logging
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
      
      setMessages((prev) => [
        ...prev, 
        { 
          text: "Sorry, I couldn't connect to the AI service. Please try again later.", 
          sender: "bot" 
        }
      ]);
    } finally {
      setIsLoading(false);
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
          AI Medical Assistant 🤖
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Get medical guidance powered by Gemini AI.
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
          {isLoading && (
            <motion.div
              className="chat-message bot loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </motion.div>
          )}
          <div ref={chatEndRef} />
        </div>
        
        {/* Input Section */}
        <div className="chat-input-container">
          <input
            type="text"
            placeholder="Type your medical question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSendMessage()}
            disabled={isLoading}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="send-button"
            onClick={handleSendMessage}
            disabled={isLoading}
          >
            <FiSend />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Chatbot;