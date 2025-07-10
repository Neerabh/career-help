🚀 Backend - Stream Prediction & Career Guidance Chatbot

This is the FastAPI backend that provides two main services:

1. Predicting a student's best stream based on their marks in **Math, Science, English, Hindi, and SST**
2. A career guidance chatbot powered by Gemini AI

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/neerabh/stream-prediction.git
cd stream-prediction/backend
```

### 2️⃣ Create a Virtual Environment

```sh
python -m venv venv

# On Mac/Linux
source venv/bin/activate

# On Windows
venv\Scripts\activate
```

### 3️⃣ Install Dependencies

```sh
pip install fastapi uvicorn scikit-learn pandas joblib google-generativeai python-dotenv
```

### 4️⃣ Set Up Environment Variables

Create a `.env` file in the backend directory with your Gemini API key:

```
GEMINI_API_KEY=your_api_key_here
```

### 5️⃣ Run the Server

```sh
uvicorn main:app --reload
```

Your FastAPI server will be live at **http://127.0.0.1:8000**.

---

## 📌 API Endpoints

### 1️⃣ Home Route

- **URL:** `GET /`
- **Description:** Returns a welcome message.
- **Response:**
  ```json
  { "message": "Stream Predictor and Chatbot Backend Running!" }
  ```

### 2️⃣ Predict Stream

- **URL:** `POST /predict_streams`
- **Description:** Predicts the best stream based on student marks.
- **Request Body (JSON):**
  ```json
  {
    "Math": 85,
    "Science": 90,
    "English": 80,
    "Hindi": 75,
    "SST": 88
  }
  ```
- **Response:**
  ```json
  {
    "eligible_streams": ["PCM", "PCB", "Commerce", "Arts"],
    "message": "Stream prediction successful"
  }
  ```

### 3️⃣ Career Guidance Chatbot

- **URL:** `POST /chat`
- **Description:** Provides career guidance and stream-related information.
- **Request Body (JSON):**
  ```json
  {
    "message": "What are the career options in PCM?"
  }
  ```
- **Response:**
  ```json
  {
    "response": "Detailed career guidance response...",
    "status": "success"
  }
  ```

---

## 📌 Folder Structure

```
backend/
│── venv/               # Virtual Environment
│── .env               # Environment Variables
│── main.py            # FastAPI Application
│── train_model.py     # ML Model Training Script
│── stream_predictor.pkl # Trained Model File
│── student_data.csv   # Dataset used for training
│── README.md          # This Documentation
```

---

## 📌 How It Works

1️⃣ **Stream Prediction**

- Train the ML Model (`train_model.py`) using student marks
- Save the trained model as `stream_predictor.pkl`
- FastAPI loads the model in `main.py`
- Users send marks via API, and the backend predicts their stream

2️⃣ **Career Guidance Chatbot**

- Uses Gemini AI for intelligent responses
- Provides detailed career guidance
- Focuses on educational and stream-related queries
- Returns structured, informative responses

---

## 📌 Frontend Integration

### Stream Prediction

```javascript
async function predictStreams(marks) {
  const response = await fetch("http://127.0.0.1:8000/predict_streams", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(marks),
  });
  return await response.json();
}
```

### Chatbot

```javascript
async function sendMessage(message) {
  const response = await fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return await response.json();
}
```
