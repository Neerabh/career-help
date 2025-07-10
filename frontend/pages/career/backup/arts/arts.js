import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  ChartBar,
  Palette,
  Microscope,
  School,
  Award,
  Building2,
  Plane,
  Shield,
  Ship,
  Code2,
  Brain,
  Calculator,
  Newspaper,
  Shirt,
  Home,
  PenTool,
  Share2,
  MessageSquare,
  Users,
  Scale,
  Heart,
  MessageCircle,
  Film,
} from "lucide-react";
import { examOptions, degreeOptions, careerOptions } from "./data";

const iconComponents = {
  BookOpen,
  GraduationCap,
  Briefcase,
  ChartBar,
  Palette,
  Microscope,
  School,
  Award,
  Building2,
  Plane,
  Shield,
  Ship,
  Code2,
  Brain,
  Calculator,
  Newspaper,
  Shirt,
  Home,
  PenTool,
  Share2,
  MessageSquare,
  Users,
  Scale,
  Heart,
  MessageCircle,
  Film,
};

const Arts = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState("degrees");

  const handleNavigation = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      router.push(path);
    }
  };

  const renderIcon = (iconName, color) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? (
      <IconComponent className={`w-8 h-8 text-${color}`} />
    ) : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Simple Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Arts Illustration"
            className="mx-auto mb-4 w-20 h-20 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Arts
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Humanities • Social Sciences • Creative Arts
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center mb-2">
                <BookOpen className="w-7 h-7 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">About Arts</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                The Arts stream offers a diverse range of opportunities in
                humanities, social sciences, and creative fields. It nurtures
                critical thinking, creativity, and communication skills. Arts is
                ideal for students interested in literature, history,
                philosophy, social sciences, fine arts, design, media, and
                public service. This stream opens doors to careers in education,
                journalism, design, civil services, law, and social work.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Subjects in Arts
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">History</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    Political Science
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">Economics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">English</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    Optional(Geography, Psychology, etc)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Toggle Button */}
        <div className="flex justify-center my-10">
          <div className="relative bg-gray-100 rounded-full flex p-1 w-[340px] shadow-md overflow-hidden">
            <div
              className="absolute inset-0 flex"
              style={{
                transform:
                  toggle === "degrees"
                    ? "translateX(0%)"
                    : toggle === "exams"
                    ? "translateX(33.33%)"
                    : "translateX(66.66%)",
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="w-1/3 h-full">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
              </div>
            </div>
            {[
              { label: "Degrees", value: "degrees" },
              { label: "Exams", value: "exams" },
              { label: "Career", value: "career" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setToggle(option.value)}
                className={`relative z-10 flex-1 px-6 py-2 text-center font-semibold transition-colors duration-200 rounded-full focus:outline-none
                  ${
                    toggle === option.value
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {toggle === "degrees"
              ? "Popular Degree Options"
              : toggle === "exams"
              ? "Entrance Exams"
              : "Career Options"}
          </h2>
          {(toggle === "degrees"
            ? degreeOptions
            : toggle === "exams"
            ? examOptions
            : careerOptions
          ).map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(option.path)}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 text-left hover:border-blue-500 group"
                  >
                    <div className="flex items-center mb-4">
                      {renderIcon(option.icon, option.color)}
                      <h3 className="text-xl font-semibold text-gray-800 ml-3">
                        {option.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-200">
                      Learn More →
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arts;
