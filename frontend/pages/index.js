import React from "react";
import Navbar from "../components/Navbar";
import CareerLibrary from "../components/CareerLibrary";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-20">
        <CareerLibrary />
      </div>
    </div>
  );
}