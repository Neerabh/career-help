"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Briefcase } from "lucide-react";

export default function PredictStream() {
  const router = useRouter();

  const [marks, setMarks] = useState({
    Math: "",
    Science: "",
    English: "",
    Hindi: "",
    SST: "",
  });

  const [errors, setErrors] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState("");
  const [backendOnline, setBackendOnline] = useState(true); // 👈 NEW

  // 🔥 Auto-check if backend is running
  useEffect(() => {
    async function checkBackend() {
      try {
        const res = await fetch("http://127.0.0.1:8000/");
        if (!res.ok) throw new Error();
        setBackendOnline(true);
      } catch (error) {
        setBackendOnline(false);
      }
    }

    checkBackend();
  }, []);

  const handleMarksChange = (e) => {
    const { name, value } = e.target;
    const numValue = value.replace(/\D/g, "").slice(0, 3);

    let errorMsg = "";
    if (numValue !== "") {
      const numeric = parseInt(numValue, 10);
      if (numeric > 100) {
        errorMsg = "Marks cannot be more than 100";
      } else if (numeric < 0) {
        errorMsg = "Marks cannot be negative";
      } else if (numeric < 33) {
        errorMsg = "Marks less than 33 are considered Fail";
      }
    }

    setErrors({ ...errors, [name]: errorMsg });
    setMarks({ ...marks, [name]: numValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!backendOnline) {
      alert("Server is currently offline. Please try again later.");
      setLoading(false);
      return;
    }

    if (Object.values(errors).some((error) => error)) {
      alert("Please fix the errors in the form before submitting!");
      setLoading(false);
      return;
    }

    if (
      Object.values(marks).some(
        (mark) => mark === "" || parseInt(mark) < 33 || parseInt(mark) > 100
      )
    ) {
      alert("Please enter valid marks between 33 and 100 for all subjects!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/predict_streams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Math: parseFloat(marks.Math),
          Science: parseFloat(marks.Science),
          English: parseFloat(marks.English),
          Hindi: parseFloat(marks.Hindi),
          SST: parseFloat(marks.SST),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction from server");
      }

      const data = await response.json();
      setPrediction(data.eligible_streams);
      setSubmitted(true);
      setToast("Prediction successful! 🎯");
    } catch (error) {
      console.error("Error:", error);
      alert("Server error! Please try again later.");
    }

    setLoading(false);
  };

  const navigateToCareer = () => {
    if (prediction && prediction.length > 0) {
      const stream = prediction[0].toLowerCase();
      router.push(`/career/${stream}/${stream}`);
    }
  };

  const getStreamAnalysis = (marks) => {
    const analysis = {
      PCM: {
        score: 0,
        strengths: [],
        weaknesses: [],
        explanation: "",
        careerProspects: []
      },
      PCB: {
        score: 0,
        strengths: [],
        weaknesses: [],
        explanation: "",
        careerProspects: []
      },
      Commerce: {
        score: 0,
        strengths: [],
        weaknesses: [],
        explanation: "",
        careerProspects: []
      },
      Arts: {
        score: 0,
        strengths: [],
        weaknesses: [],
        explanation: "",
        careerProspects: []
      }
    };

    // Calculate scores and analyze for each stream
    if (marks.Math >= 80) {
      analysis.PCM.score += 2;
      analysis.PCM.strengths.push("Strong in Mathematics");
      analysis.PCB.score += 1;
      analysis.PCB.strengths.push("Good in Mathematics");
    } else if (marks.Math >= 60) {
      analysis.PCM.score += 1;
      analysis.PCM.strengths.push("Average in Mathematics");
    } else {
      analysis.PCM.weaknesses.push("Mathematics needs improvement");
    }

    if (marks.Science >= 80) {
      analysis.PCM.score += 2;
      analysis.PCM.strengths.push("Strong in Science");
      analysis.PCB.score += 2;
      analysis.PCB.strengths.push("Strong in Science");
    } else if (marks.Science >= 60) {
      analysis.PCM.score += 1;
      analysis.PCB.score += 1;
      analysis.PCM.strengths.push("Average in Science");
      analysis.PCB.strengths.push("Average in Science");
    } else {
      analysis.PCM.weaknesses.push("Science needs improvement");
      analysis.PCB.weaknesses.push("Science needs improvement");
    }

    if (marks.English >= 80) {
      analysis.Arts.score += 2;
      analysis.Arts.strengths.push("Strong in English");
      analysis.Commerce.score += 1;
      analysis.Commerce.strengths.push("Good in English");
    } else if (marks.English >= 60) {
      analysis.Arts.score += 1;
      analysis.Arts.strengths.push("Average in English");
    } else {
      analysis.Arts.weaknesses.push("English needs improvement");
    }

    if (marks.SST >= 80) {
      analysis.Arts.score += 2;
      analysis.Arts.strengths.push("Strong in Social Studies");
      analysis.Commerce.score += 1;
      analysis.Commerce.strengths.push("Good in Social Studies");
    } else if (marks.SST >= 60) {
      analysis.Arts.score += 1;
      analysis.Arts.strengths.push("Average in Social Studies");
    } else {
      analysis.Arts.weaknesses.push("Social Studies needs improvement");
    }

    // Add career prospects
    analysis.PCM.careerProspects = [
      "Engineering (Various Specializations)",
      "Architecture",
      "Data Science",
      "Research & Development",
      "Space Technology"
    ];

    analysis.PCB.careerProspects = [
      "Medical Sciences",
      "Biotechnology",
      "Pharmacy",
      "Environmental Science",
      "Research & Development"
    ];

    analysis.Commerce.careerProspects = [
      "Chartered Accountancy",
      "Business Management",
      "Finance & Banking",
      "Economics",
      "Entrepreneurship"
    ];

    analysis.Arts.careerProspects = [
      "Journalism & Mass Communication",
      "Psychology",
      "Law",
      "Social Work",
      "Education"
    ];

    return analysis;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 w-full flex items-center justify-center md:justify-start">
        <Link href="/">
          <img src="/Navbar/logo.png" alt="Logo" className="h-8 md:h-10" />
        </Link>
      </nav>

      {/* Show Server Down Message */}
      {!backendOnline && (
        <div className="mt-24 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-lg text-center">
          Backend server is not reachable! Please check your connection or try
          restarting the server.
        </div>
      )}

      <div className="mt-24 max-w-xl w-full bg-white p-6 md:p-8 rounded-xl shadow-xl">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800 mb-6">
          Stream Prediction
        </h1>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {Object.keys(marks).map((subject) => (
              <div key={subject}>
                <label className="block text-gray-700 font-medium">
                  {subject}
                </label>
                <input
                  type="text"
                  name={subject}
                  value={marks[subject]}
                  onChange={handleMarksChange}
                  placeholder="Enter marks (0-100)"
                  className="w-full mt-2 p-3 border rounded-lg text-black placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 shadow-sm transition-all hover:shadow-md"
                  required
                />
                {errors[subject] && (
                  <p className="text-red-500 text-sm mt-1">{errors[subject]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all hover:scale-105 disabled:opacity-50"
              disabled={loading || Object.values(errors).some((error) => error)}
            >
              {loading ? "Predicting..." : "Predict Stream"}
            </button>
          </form>
        ) : (
          <div className="space-y-8">
            <div className="p-5 bg-yellow-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Stream Analysis</h3>
              {prediction
                .filter((stream) => stream && stream !== "None")
                .map((stream, index) => {
                  const analysis = getStreamAnalysis(marks)[stream];
                  return (
                    <div key={index} className="mb-6 last:mb-0">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-2xl font-bold text-gray-700">{stream}</h4>
                        <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          Score: {analysis.score}/4
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                          <h5 className="font-semibold text-gray-700 mb-2">Strengths</h5>
                          <ul className="space-y-1">
                            {analysis.strengths.map((strength, idx) => (
                              <li key={idx} className="flex items-center text-green-600">
                                <span className="mr-2">✓</span>
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow">
                          <h5 className="font-semibold text-gray-700 mb-2">Career Prospects</h5>
                          <ul className="space-y-1">
                            {analysis.careerProspects.map((career, idx) => (
                              <li key={idx} className="flex items-center text-blue-600">
                                <span className="mr-2">•</span>
                                {career}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {analysis.weaknesses.length > 0 && (
                        <div className="mt-4 bg-red-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-700 mb-2">Areas for Improvement</h5>
                          <ul className="space-y-1">
                            {analysis.weaknesses.map((weakness, idx) => (
                              <li key={idx} className="flex items-center text-red-600">
                                <span className="mr-2">!</span>
                                {weakness}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            <div className="mt-4">
              <p className="text-center text-gray-700 font-medium mb-4">
                Explore career options for your recommended streams:
              </p>
              <div className="flex flex-col items-center gap-3">
                {prediction
                  .filter((stream) => stream && stream !== "None")
                  .map((stream, idx) => (
                    <a
                      key={idx}
                      href={`/career/${stream.toLowerCase()}/${stream.toLowerCase()}#careers`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-xs bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all text-center text-lg flex items-center justify-center gap-2 hover:scale-105"
                      style={{ letterSpacing: "0.5px" }}
                    >
                      <Briefcase className="w-5 h-5 mr-2" />
                      {stream}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
