# routers/auth.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient
from bson import ObjectId
import bcrypt

router = APIRouter()

# MongoDB connection
client = MongoClient("mongodb://localhost:27017")
db = client["health_monitoring"]
users_collection = db["users"]

# Pydantic models
class SignupData(BaseModel):
    name: str
    email: str
    password: str

class LoginData(BaseModel):
    email: str
    password: str

@router.post("/signup")
async def signup(data: SignupData):
    # Check if user already exists
    if users_collection.find_one({"email": data.email}):
        raise HTTPException(status_code=400, detail="User already exists")

    # Hash password
    hashed_password = bcrypt.hashpw(data.password.encode('utf-8'), bcrypt.gensalt())

    user = {
        "name": data.name,
        "email": data.email,
        "password": hashed_password
    }

    users_collection.insert_one(user)
    return {"message": "User registered successfully"}

@router.post("/login")
async def login(data: LoginData):
    user = users_collection.find_one({"email": data.email})

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if not bcrypt.checkpw(data.password.encode('utf-8'), user["password"]):
        raise HTTPException(status_code=401, detail="Incorrect password")

    return {"message": "Login successful", "user": {"name": user["name"], "email": user["email"]}}
