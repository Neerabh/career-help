🚀 Frontend - Marks-Based Stream Prediction

This is the **Next.js frontend** for the Marks-Based Stream Prediction system.  
It allows users to enter their **marks** and get a **predicted stream** while also exploring career options.

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/neerabh/stream-prediction.git
cd stream-prediction/frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```
Your frontend will be live at **[http://localhost:3000](http://localhost:3000)**.

---

## 📌 Folder Structure
```
frontend/
│── components/         # Reusable UI Components
│   ├── CareerLibrary.js  # Career library UI
│   ├── Navbar.js        # Main Navbar
│── pages/              # Next.js Pages
│   ├── index.js        # Home Page
│   ├── predict-stream.js # Stream Prediction Page
│   ├── career/         # Career pages for PCM, PCB, etc.
│── public/             # Static Assets (logos, images)
│── styles/             # Global & Component Styles
│── README.md           # This Documentation
```

---

## 📌 Features
✅ **Stream Prediction Page** - Users enter marks and get their predicted stream.  
✅ **Career Library** - Browse career paths related to each stream.  
✅ **AI Chatbot (Upcoming Feature)** - Helps users with career guidance.  
✅ **Fully Responsive UI** - Works on all devices using Tailwind CSS.  

---

## 📌 API Integration
- The frontend connects to the **FastAPI backend** for stream prediction.  
- Ensure the backend is running before testing prediction features.  


