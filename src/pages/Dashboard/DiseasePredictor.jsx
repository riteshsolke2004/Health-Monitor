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
  const [additional, setAdditional] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const symptoms = [
    "Fever", "Cough", "Headache", "Sore Throat",
    "Fatigue", "Diarrhea", "Nausea"
  ];

  const handleCheckboxChange = (symptom) => {
    setAdditional((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSubmit = async () => {
    setLoading(true);

    const symptomData = {};
    symptoms.forEach(symptom => {
      symptomData[symptom] = additional.includes(symptom) ? 1 : 0;
    });

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(  symptomData ) // ✅ wrapped in 'root'
      });

      const data = await response.json();
      setResult(data.prediction || data.error || "Unknown response");
    } catch (err) {
      setResult("Error contacting the server.");
    } finally {
      setLoading(false);
    }
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
        <p>Select Symptoms:</p>
        <div className="checkbox-grid">
          {symptoms.map((s, i) => (
            <label key={i}>
              <input
                type="checkbox"
                value={s}
                checked={additional.includes(s)}
                onChange={() => handleCheckboxChange(s)}
              />
              {s.replace("_", " ")}
            </label>
          ))}
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
