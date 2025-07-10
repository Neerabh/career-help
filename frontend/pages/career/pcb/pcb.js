import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  ChartBar,
  Rocket,
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
  X,
  ExternalLink,
  Loader2,
  Heart,
  Flask,
  Stethoscope,
  Leaf,
  Pill,
  Dna,
  TestTube,
} from "lucide-react";
import { examOptions, degreeOptions, careerOptions, generateContentForOption, getFallbackContent } from "./data";

const iconComponents = {
  BookOpen,
  GraduationCap,
  Briefcase,
  ChartBar,
  Rocket,
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
  Heart,
  Flask,
  Stethoscope,
  Leaf,
  Pill,
  Dna,
  TestTube,
};

// --- Animated Modal Component with Enhanced Effects ---
const ContentModal = ({ isOpen, onClose, title, content, isLoading, optionPath, onNavigate }) => {
  const [animationState, setAnimationState] = useState("initial");
  const [typedContent, setTypedContent] = useState("");
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  // Reset animation state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setAnimationState("opening");
      setTimeout(() => setAnimationState("open"), 500);
    } else {
      setAnimationState("initial");
      setTypedContent("");
      setTypewriterComplete(false);
    }
  }, [isOpen]);

  // Typewriter effect for content
  useEffect(() => {
    if (animationState === "open" && !isLoading && content && !typewriterComplete) {
      let currentIndex = 0;
      const contentArray = content.split("");
      const typingInterval = setInterval(() => {
        if (currentIndex < contentArray.length) {
          setTypedContent(prev => prev + contentArray[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTypewriterComplete(true);
        }
      }, 10);
      return () => clearInterval(typingInterval);
    }
  }, [animationState, isLoading, content, typewriterComplete]);

  if (!isOpen) return null;

  // Parse content and structure it
  const formattedContent = () => {
    if (isLoading) return null;
    const contentToDisplay = typewriterComplete ? content : typedContent;
    const paragraphs = contentToDisplay.split('\n').filter(p => p.trim() !== '');
    if (paragraphs.length === 0) return null;
    const firstParagraph = paragraphs[0];
    const remainingParagraphs = paragraphs.slice(1);
    return (
      <div className="space-y-4">
        {firstParagraph && (
          <p className="text-lg font-medium text-gray-800 leading-relaxed">
            {firstParagraph}
          </p>
        )}
        {remainingParagraphs.length > 0 && (
          <div className="space-y-3 text-gray-700">
            {remainingParagraphs.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
        {typewriterComplete && optionPath && (
          <div className="pt-4"></div>
        )}
      </div>
    );
  };

  const backdropClasses = {
    initial: "opacity-0 backdrop-blur-none",
    opening: "opacity-100 backdrop-blur-sm transition-all duration-500",
    open: "opacity-100 backdrop-blur-md transition-all duration-300"
  }[animationState];

  const modalClasses = {
    initial: "opacity-0 scale-95 translate-y-4",
    opening: "opacity-100 scale-100 translate-y-0 transition-all duration-500 ease-out",
    open: "opacity-100 scale-100 translate-y-0 transition-all duration-300 ease-out"
  }[animationState];

  return (
    <div className={`fixed inset-0 z-50 flex justify-center items-center p-4 ${backdropClasses}`}>
      <div
        className={`bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col ${modalClasses}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5 text-white flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-blue-700"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-grow">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-40">
              <div className="relative">
                <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-t-4 border-blue-300 rounded-full animate-spin"></div>
                </div>
              </div>
              <p className="text-gray-500 mt-6 animate-pulse">Generating insights...</p>
            </div>
          ) : (
            <div className="prose prose-blue max-w-none">
              {formattedContent()}
            </div>
          )}
        </div>
        {!isLoading && optionPath && typewriterComplete && (
          <div className="p-4 border-t border-gray-200 bg-gray-50 animate-fadeIn">
            <button
              onClick={() => onNavigate(optionPath)}
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Learn More on Official Site
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Card Component with Animation ---
const OptionCard = ({ option, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconComponents[option.icon] || School;

  let colorClass = 'text-gray-500';
  if (option.color && ['blue-500', 'blue-600', 'indigo-600', 'red-500',
      'green-600', 'purple-600', 'gray-700', 'amber-600', 'teal-600'].includes(option.color)) {
    colorClass = `text-${option.color}`;
  }

  return (
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 group flex flex-col h-full
      ${isHovered ? 'shadow-lg translate-y-[-4px]' : 'hover:shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-5 flex-grow">
        <div className="flex items-center mb-3">
          <IconComponent className={`w-8 h-8 ${colorClass} transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
          <h4 className="text-lg font-semibold text-gray-800 ml-3">
            {option.title}
          </h4>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{option.description}</p>
      </div>
      <button
        onClick={() => onClick(option)}
        className={`w-full mt-auto px-5 py-3 text-sm font-medium text-center transition-colors duration-200
        ${isHovered
          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
          : 'bg-gray-50 hover:bg-gray-100 text-blue-600 border-t border-gray-200'}`}
      >
        View Details {isHovered && <span className="ml-1">→</span>}
      </button>
    </div>
  );
};

// --- Main PCB Component ---
const PCB = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState("degrees");

  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (path) => {
    if (!path) return;
    if (path.startsWith("http")) {
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      router.push(path);
    }
  };

  const handleShowDetails = async (option) => {
    setSelectedOption(option);
    setIsModalOpen(true);
    setIsLoading(true);
    setModalContent("");
  
    try {
      setTimeout(async () => {
        try {
          // Use a try-catch block specifically for content generation
          let generatedContent;
          try {
            generatedContent = await generateContentForOption(option);
          } catch (contentError) {
            console.error("Error generating content:", contentError);
            generatedContent = getFallbackContent(option);
          }
          
          // Make sure the content is a string
          if (typeof generatedContent !== 'string') {
            generatedContent = JSON.stringify(generatedContent) || getFallbackContent(option);
          }
          
          setModalContent(generatedContent);
        } catch (error) {
          console.error("Error setting modal content:", error);
          setModalContent(getFallbackContent(option));
        } finally {
          setIsLoading(false);
        }
      }, 800);
    } catch (error) {
      console.error("Error in modal display:", error);
      setTimeout(() => {
        setIsLoading(false);
        setModalContent("Unable to generate content at this time. Please try again later.");
      }, 800);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const currentOptions =
    toggle === "degrees"
      ? degreeOptions
      : toggle === "exams"
      ? examOptions
      : careerOptions;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="PCB Illustration"
            className="mx-auto mb-4 w-20 h-20 object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"; }}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PCB
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Physics • Chemistry • Biology
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Overview Section */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <div className="flex items-center mb-2">
                <BookOpen className="w-7 h-7 text-blue-500 mr-3 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">About PCB</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                The PCB stream (Physics, Chemistry, Biology) is a popular
                academic path for students interested in medical, healthcare,
                and life sciences. It provides a strong foundation in biological
                sciences, chemistry, and physics, making it ideal for students
                who want to pursue careers in medicine, pharmacy, biotechnology,
                research, and other healthcare-related fields. PCB is perfect
                for those who are passionate about understanding life processes
                and contributing to healthcare and scientific advancements.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
                Subjects in PCB
              </h3>
              <div className="space-y-2">
                {[
                    "Physics", "Chemistry", "Biology", "English", "Optional (e.g., Mathematics, PE)"
                ].map((subject, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-base md:text-lg">{subject}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Toggle Button */}
        <div className="flex justify-center my-8 md:my-10">
          <div className="relative bg-gray-100 rounded-full flex p-1 w-auto max-w-md shadow-md overflow-hidden">
            <div
              className="absolute inset-0 flex"
              style={{
                width: `${100 / 3}%`,
                transform: `translateX(${
                  toggle === "degrees" ? 0 : toggle === "exams" ? 100 : 200
                }%)`,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
            </div>
            {[
              { label: "Degrees", value: "degrees" },
              { label: "Exams", value: "exams" },
              { label: "Career", value: "career" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setToggle(option.value)}
                className={`relative z-10 flex-1 px-4 py-2 text-sm md:text-base text-center font-semibold transition-colors duration-200 rounded-full focus:outline-none ${
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

        {/* Content Section - Displaying Options */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            {toggle === "degrees" ? "Popular Degree Options"
             : toggle === "exams" ? "Entrance Exams"
             : "Career Options"}
          </h2>
          {currentOptions.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8 last:mb-0">
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {category.options.map((option, index) => (
                  <OptionCard
                    key={index}
                    option={option}
                    onClick={handleShowDetails}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the Modal */}
      <ContentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedOption?.title || "Details"}
        content={modalContent}
        isLoading={isLoading}
        optionPath={selectedOption?.path}
        onNavigate={handleNavigation}
      />
    </div>
  );
};


export default PCB;
