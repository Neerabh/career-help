import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      {/* Left - Logo */}
      <Link href="/" className="flex items-center space-x-2">
  <img src="/Navbar/logo.png" alt="Logo" className="h-8 w-auto" />
</Link>
      {/* Right - Buttons */}
      <div className="flex items-center space-x-4">
        {/* Predict Your Stream Button */}
        <Link href="/predict-stream">
          <button className="px-4 py-2 bg-yellow-400 text-white font-medium rounded-lg shadow-sm hover:bg-yellow-600 transition">
            Predict Stream
          </button>
        </Link>

        {/* AI Chatbot Button with Custom Logo */}
        <Link href="/chatbot">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg shadow-sm hover:bg-gray-200 transition">
            <img src="/Navbar/chatbot.png" alt="Chatbot" className="h-6 w-6" />
            <span>AI</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}