from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np
import google.generativeai as genai
import os
from dotenv import load_dotenv
from typing import List, Optional
import json

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Configure Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
chat_model = genai.GenerativeModel('gemini-1.5-pro')

# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model
model = joblib.load("stream_predictor.pkl")

# Define input formats
class MarksInput(BaseModel):
    Math: float
    Science: float
    English: float
    Hindi: float
    SST: float

class ChatInput(BaseModel):
    message: str
    conversation_id: Optional[str] = None

# Store conversation history
conversation_history = {}

# System prompt for the chatbot
SYSTEM_PROMPT = """You are a helpful career guidance assistant specializing in stream selection and education. 
Your responses should be:
1. Clear and concise
2. Focused on educational and career guidance
3. Structured with bullet points when listing information
4. Supportive and encouraging

When discussing streams, consider:
- Science (PCM, PCB)
- Commerce
- Arts
- Career prospects
- Required skills and subjects
"""

# Home Route
@app.get("/")
async def home():
    return {"message": "Stream Predictor and Chatbot Backend Running!"}

# Prediction Route
@app.post("/predict_streams")
async def predict_streams(marks: MarksInput):
    try:
        # Convert marks into a 2D array for prediction
        input_data = np.array([[marks.Math, marks.Science, marks.English, marks.Hindi, marks.SST]])
        
        # Predict
        predicted_streams = model.predict(input_data)

        # Get list of eligible streams
        eligible_streams = list(predicted_streams[0])

        return {
            "eligible_streams": eligible_streams,
            "message": "Stream prediction successful"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Chatbot Route
@app.post("/chat")
async def chat(chat_input: ChatInput):
    try:
        # Generate response directly without storing history
        response = chat_model.generate_content(
            f"""As a career guidance assistant, provide concise and focused responses. 
            Keep responses brief and to the point, using bullet points when listing information.
            Maximum 3-4 sentences per point.
            
            User's question: {chat_input.message}
            
            Format your response:
            - Use bullet points for lists
            - Keep each point brief
            - Focus on key information
            - Use simple language
            """
        )

        return {
            "response": response.text,
            "status": "success"
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail={
                "error": str(e),
                "message": "An error occurred while processing your request"
            }
        )