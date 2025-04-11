# main.py

#from fastapi import FastAPI
#from fastapi.middleware.cors import CORSMiddleware
from routers import auth
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
import pandas as pd
from typing import Dict
import requests

app = FastAPI()

# ✅ Updated frontend origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Vite (React) default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth")

@app.get("/")
def root():
    return {"message": "API running"}


# Load ML model
model = joblib.load("rogg.pkl")

# Label to disease mapping
bel_to_disease = {
    8: "Dengue", 19: "Typhoid", 13: "Malaria", 18: "Tuberculosis",
    7: "Common Cold", 16: "Pneumonia", 4: "COVID-19", 3: "Bronchitis",
    2: "Asthma", 9: "Diabetes", 10: "Hepatitis", 5: "Chickenpox",
    15: "Migraine", 11: "Hypertension", 0: "Allergies", 6: "Cholera",
    12: "Jaundice", 17: "Sinusitis", 1: "Anemia", 14: "Measles"
}

# Gemini API setup (replaced by Cohere)
# GEMINI_API_KEY= "AIzaSyDfNkry_rFxgEXNt9bDq4GLsH-A3JOSPyQ"  
# GEMINI_URL= f"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDfNkry_rFxgEXNt9bDq4GLsH-A3JOSPyQ"


@app.post("/predict")
async def predict_disease(data: Dict[str, int]):
    try:
        df = pd.DataFrame([data])
        prediction_index = model.predict(df)[0]

        if isinstance(prediction_index, np.generic):
            prediction_index = prediction_index.item()

        disease_name = bel_to_disease.get(prediction_index, "Unknown Disease")
        return {"prediction": disease_name}
    except Exception as e:
        return {"error": str(e)}

# ✅ Cohere Chat Integration
import cohere
co = cohere.Client("YTdCRGaobzgv9X7R5IOVi67V0bvm8A4cTtFBg7hA")  # Replace with your real key

@app.post("/chat")
async def gemini_chat(request: dict):
    user_input = request.get("message", "")

    if not user_input:
        return {"response": "Please provide a message."}

    try:
        response = co.chat(
            model="command-r-plus",
            message=user_input,
            temperature=0.5,
            prompt_truncation="auto",
            preamble="You are an AI doctor. Provide short, easy answers."
        )
        return {"response": response.text}

    except Exception as e:
        return {"error": str(e)}
