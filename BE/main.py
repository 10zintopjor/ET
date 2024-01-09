from fastapi import FastAPI
import requests
from fastapi.middleware.cors import CORSMiddleware
import random


app = FastAPI()

# CORS middleware
origins = [
    "http://frontend",  # Adjust this to the actual URL of your React app
    "http://frontend:3000",  # If your React app is running on a different port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api")
async def root():
    return {"message": "Hello World"}

@app.get("/api/getrandomproducts")
async def get_random_products():
    res = requests.get("https://dummyjson.com/products")
    data = res.json()
    data["products"] = random.sample(data["products"],10)
    return data