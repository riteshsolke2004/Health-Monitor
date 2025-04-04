from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["health_monitoring"]
users_collection = db["customers"]
