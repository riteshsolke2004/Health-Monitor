import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "./DiseasePredictor.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DiseasePredictor = () => {
  const [symptom, setSymptom] = useState("");
  const [additional, setAdditional] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const symptoms = [
    "Fever", "Cough", "Fatigue", "Headache",
    "Chest Pain", "Skin Rash", "Sore Throat", "Nausea"
  ];

  const handleSubmit = () => {
    if (!symptom) return alert("Please select a primary symptom");
    setLoading(true);
    setTimeout(() => {
      setResult("⚠️ Based on your symptoms, there may be a risk of Dengue or Viral Infection. Please consult a healthcare provider.");
      setLoading(false);
    }, 2000);
  };

  const data = {
    labels: ["Heart", "Lungs", "Liver", "Brain"],
    datasets: [
      {
        label: "Organ Impact Level (%)",
        data: [20, 50, 30, 45],
        backgroundColor: "#10b981",
        borderRadius: 8,
      },
    ],
  };

  return (
    <motion.div
      className="predictor-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="title">🧠 Disease Predictor Portal</h1>

      <div className="card">
        <label>Select Primary Symptom</label>
        <select value={symptom} onChange={(e) => setSymptom(e.target.value)}>
          <option value="">-- Choose --</option>
          {symptoms.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>

        <div className="checkbox-section">
          <p>Additional Symptoms:</p>
          <div className="checkbox-grid">
            {symptoms.map((s, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  value={s}
                  checked={additional.includes(s)}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAdditional((prev) =>
                      prev.includes(value)
                        ? prev.filter((x) => x !== value)
                        : [...prev, value]
                    );
                  }}
                />
                {s}
              </label>
            ))}
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="predict-btn"
        >
          🔍 Predict
        </motion.button>

        {loading && <div className="loader" />}
        {!loading && result && <p className="result">{result}</p>}
      </div>

      <div className="chart-box">
        <Bar data={data} />
      </div>
    </motion.div>
  );
};

export default DiseasePredictor;
