# main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import auth

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
