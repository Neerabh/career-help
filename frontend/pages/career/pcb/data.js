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
  Heart,
  Flask,
  Stethoscope,
  Leaf,
  Pill,
  Dna,
  TestTube,
} from "lucide-react";

export const examOptions = [
  {
    category: "Medical & Allied Health",
    options: [
      {
        title: "NEET-UG",
        description: "MBBS, BDS, BAMS, BHMS, BPT, B.Sc. Nursing, etc.",
        icon: "Stethoscope",
        color: "red-600",
        path: "https://nta.ac.in/NEET",
      },
      {
        title: "AIIMS MBBS",
        description: "Now via NEET",
        icon: "Heart",
        color: "pink-600",
        path: "https://www.aiimsexams.ac.in/",
      },
      {
        title: "JIPMER",
        description: "Now via NEET",
        icon: "Stethoscope",
        color: "blue-600",
        path: "https://jipmer.edu.in/",
      },
      {
        title: "ICAR AIEEA",
        description: "B.Sc. Agriculture, Animal Science, Horticulture",
        icon: "Leaf",
        color: "green-600",
        path: "https://icar.nta.nic.in/",
      },
      {
        title: "CUET",
        description: "For B.Sc. (Bio, Microbiology, Biotech, etc.)",
        icon: "School",
        color: "indigo-600",
        path: "https://cuet.samarth.ac.in/",
      },
    ],
  },
  {
    category: "Research & Science",
    options: [
      {
        title: "IISER Aptitude Test",
        description: "BS-MS program",
        icon: "Microscope",
        color: "blue-600",
        path: "https://www.iiseradmission.in/",
      },
      {
        title: "NEST",
        description: "NISER & UM-DAE CBS for research programs",
        icon: "TestTube",
        color: "orange-600",
        path: "https://www.nestexam.in/",
      },
    ],
  },
  {
    category: "Other Exams",
    options: [
      {
        title: "State CETs",
        description: "For Pharmacy, Nursing, etc.",
        icon: "Award",
        color: "purple-600",
        path: "https://cetcell.mahacet.org/ (Example)",
      },
      {
        title: "AFMC",
        description: "Armed Forces Medical College (via NEET)",
        icon: "Shield",
        color: "gray-600",
        path: "https://www.afmc.nic.in/",
      },
      {
        title: "DUET/IPU CET",
        description: "University-specific entrance exams",
        icon: "Building2",
        color: "blue-600",
        path: "https://ipu.admissions.nic.in/",
      },
    ],
  },
];

export const degreeOptions = [
  {
    category: "Medical & Healthcare",
    options: [
      {
        title: "MBBS",
        description: "Bachelor of Medicine and Bachelor of Surgery",
        icon: "Stethoscope",
        color: "red-600",
        path: "https://www.nmc.org.in/ActivitiWebClient/open/studentCorner/MBBSUGCurriculum",
      },
      {
        title: "BDS",
        description: "Bachelor of Dental Surgery",
        icon: "Stethoscope",
        color: "blue-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Dental_Surgery",
      },
      {
        title: "BAMS",
        description: "Bachelor of Ayurvedic Medicine and Surgery",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Ayurvedic_Medicine_and_Surgery",
      },
      {
        title: "BHMS",
        description: "Bachelor of Homeopathic Medicine and Surgery",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Homeopathic_Medicine_and_Surgery",
      },
      {
        title: "BUMS",
        description: "Bachelor of Unani Medicine and Surgery",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Unani_Medicine_and_Surgery",
      },
      {
        title: "B.Sc. Nursing",
        description: "Bachelor of Science in Nursing",
        icon: "Heart",
        color: "pink-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Science_in_Nursing",
      },
      {
        title: "BPT",
        description: "Bachelor of Physiotherapy",
        icon: "Heart",
        color: "blue-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Physiotherapy",
      },
      {
        title: "BOT",
        description: "Bachelor of Occupational Therapy",
        icon: "Heart",
        color: "purple-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Occupational_Therapy",
      },
    ],
  },
  {
    category: "Pharmacy & Allied Sciences",
    options: [
      {
        title: "B.Pharm",
        description: "Bachelor of Pharmacy",
        icon: "Pill",
        color: "purple-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Pharmacy",
      },
      {
        title: "D.Pharm",
        description: "Diploma in Pharmacy",
        icon: "Pill",
        color: "blue-600",
        path: "https://en.wikipedia.org/wiki/Diploma_in_Pharmacy",
      },
      {
        title: "B.Sc. (Hons)",
        description: "Biology, Microbiology, Biochemistry, Zoology, Botany",
        icon: "Microscope",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Science",
      },
      {
        title: "Integrated M.Sc.",
        description: "BS-MS Dual Degree Programs",
        icon: "Microscope",
        color: "blue-600",
        path: "https://www.iiseradmission.in/",
      },
    ],
  },
  {
    category: "Agriculture & Veterinary",
    options: [
      {
        title: "B.V.Sc.",
        description: "Bachelor of Veterinary Sciences",
        icon: "Heart",
        color: "red-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Veterinary_Science",
      },
      {
        title: "B.Sc. Agriculture",
        description: "Agricultural Sciences",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Science_in_Agriculture",
      },
      {
        title: "B.Sc. Horticulture",
        description: "Horticultural Sciences",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Horticulture",
      },
      {
        title: "B.Sc. Forestry",
        description: "Forestry and Environmental Sciences",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Forestry",
      },
    ],
  },
  {
    category: "Technology & Research",
    options: [
      {
        title: "B.Tech Biotechnology",
        description: "Biotechnology and Genetic Engineering",
        icon: "Dna",
        color: "blue-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Technology#Biotechnology",
      },
      {
        title: "BMLT",
        description: "Medical Lab Technology",
        icon: "Microscope",
        color: "purple-600",
        path: "https://en.wikipedia.org/wiki/Bachelor_of_Medical_Laboratory_Technology",
      },
    ],
  },
];

export const careerOptions = [
  {
    category: "Medical Field",
    options: [
      {
        title: "Doctor",
        description: "Medical Practitioner (MBBS)",
        icon: "Stethoscope",
        color: "red-600",
        path: "https://en.wikipedia.org/wiki/Physician",
      },
      {
        title: "Dentist",
        description: "Dental Care Specialist (BDS)",
        icon: "Stethoscope",
        color: "blue-600",
        path: "https://en.wikipedia.org/wiki/Dentist",
      },
      {
        title: "Ayurvedic Doctor",
        description: "Traditional Medicine Practitioner (BAMS)",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Ayurveda#Practitioners",
      },
      {
        title: "Surgeon",
        description: "Medical Specialist",
        icon: "Stethoscope",
        color: "red-600",
        path: "https://en.wikipedia.org/wiki/Surgeon",
      },
      {
        title: "Physiotherapist",
        description: "Physical Therapy Specialist",
        icon: "Heart",
        color: "blue-600",
        path: "https://en.wikipedia.org/wiki/Physical_therapy",
      },
      {
        title: "Pharmacist",
        description: "Medication and Drug Expert",
        icon: "Pill",
        color: "purple-600",
        path: "https://en.wikipedia.org/wiki/Pharmacist",
      },
      {
        title: "Nurse",
        description: "Healthcare Professional",
        icon: "Heart",
        color: "pink-600",
        path: "https://en.wikipedia.org/wiki/Nurse",
      },
      {
        title: "Medical Lab Technician",
        description: "Laboratory Testing Specialist",
        icon: "Microscope",
        color: "blue-600",
        path: "https://en.wikipedia.org/wiki/Medical_laboratory_scientist",
      },
    ],
  },
  {
    category: "Research & Science",
    options: [
      {
        title: "Biologist",
        description: "Biological Research",
        icon: "Microscope",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Biologist",
      },
      {
        title: "Microbiologist",
        description: "Microorganism Research",
        icon: "Microscope",
        color: "blue-600",
        path: "https://en.wikipedia.org/wiki/Microbiologist",
      },
      {
        title: "Biotechnologist",
        description: "Biotechnology Research",
        icon: "Dna",
        color: "purple-600",
        path: "https://en.wikipedia.org/wiki/Biotechnology",
      },
      {
        title: "Genetic Engineer",
        description: "Genetic Research and Development",
        icon: "Dna",
        color: "blue-600",
        path: "https://en.wikipedia.org/wiki/Genetic_engineering",
      },
      {
        title: "Environmental Scientist",
        description: "Environmental Research",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Environmental_science",
      },
      {
        title: "Forensic Scientist",
        description: "Forensic Research",
        icon: "Microscope",
        color: "red-600",
        path: "https://en.wikipedia.org/wiki/Forensic_scientist",
      },
    ],
  },
  {
    category: "Agriculture & Allied",
    options: [
      {
        title: "Agriculture Scientist",
        description: "Agricultural Research",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Agricultural_science",
      },
      {
        title: "Horticulturist",
        description: "Plant Cultivation Expert",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Horticulture",
      },
      {
        title: "Soil Conservationist",
        description: "Soil Management Expert",
        icon: "Leaf",
        color: "green-600",
        path: "https://en.wikipedia.org/wiki/Soil_conservation",
      },
      {
        title: "Food Technologist",
        description: "Food Science Expert",
        icon: "Flask",
        color: "orange-600",
        path: "https://en.wikipedia.org/wiki/Food_technology",
      },
    ],
  },
  {
    category: "Other Careers",
    options: [
      {
        title: "Dietician",
        description: "Nutrition and Diet Expert",
        icon: "Heart",
        color: "pink-600",
        path: "https://en.wikipedia.org/wiki/Dietitian",
      },
      {
        title: "Psychologist",
        description: "Mental Health Professional",
        icon: "Brain",
        color: "purple-600",
        path: "https://en.wikipedia.org/wiki/Psychologist",
      },
      {
        title: "Science Writer",
        description: "Scientific Content Creation",
        icon: "BookOpen",
        color: "blue-600",
        path: "https://en.wikipedia.org/wiki/Science_journalist",
      },
      {
        title: "Lab Manager",
        description: "Laboratory Administration",
        icon: "Microscope",
        color: "gray-600",
        path: "https://en.wikipedia.org/wiki/Laboratory_manager",
      },
      {
        title: "Public Health Officer",
        description: "Public Health Management",
        icon: "Heart",
        color: "red-600",
        path: "https://en.wikipedia.org/wiki/Public_health",
      },
      {
        title: "Hospital Administrator",
        description: "Healthcare Facility Management",
        icon: "Briefcase",
        color: "orange-600",
        path: "https://en.wikipedia.org/wiki/Healthcare_administration",
      },
    ],
  },
];

export async function generateContentForOption(option) {
  if (!option || !option.title) {
    console.error("generateContentForOption: Invalid option provided.");
    return "Error: Could not generate details because the selected option is invalid.";
  }

  try {
    const response = await fetch('/api/generate-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: option.title,
        description: option.description
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    // Try to parse as JSON, but handle HTML responses properly
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return data.content;
    } else {
      // If we received HTML or other non-JSON content, use fallback
      console.warn(`Received non-JSON response for ${option.title}. Using fallback.`);
      return getFallbackContent(option);
    }
  } catch (error) {
    console.error(`Content generation error for ${option.title}:`, error);
    return getFallbackContent(option);
  }
}

export function getFallbackContent(option) {
  return `${option.title} is a popular option for PCB students.\n\n${option.description}\n\nStudents who pursue this path can expect to gain valuable skills and knowledge in their chosen field. The curriculum typically includes specialized courses that build upon the foundation established through PCB studies.\n\nKey benefits include industry recognition, strong career prospects, and the opportunity to make significant contributions to the field.\n\nFor more detailed information, including admission requirements, curriculum details, and career outcomes, visit the official website.`;
}