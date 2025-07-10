import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const careerOptions = [
  { title: "PCM", options: 30, image: "/home/pcm.png" },
  { title: "PCB", options: 16, image: "/home/pcb.png" },
  { title: "Arts", options: 4, image: "/home/arts.png" },
  { title: "Commerce", options: 8, image: "/home/commerce.png" },
  { title: "Diploma", options: 11, image: "/home/diploma.png" },
  { title: "Others", options: 11, image: "/home/other.png" },
];

export default function CareerLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Filter career options based on search input
  const filteredCareers = careerOptions.filter((career) =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getNavigationPath = (title) => {
    if (title === "Others") {
      return "/career/other/other";
    }
    return `/career/${title.toLowerCase()}/${title.toLowerCase()}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Your Career Library
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search Careers"
            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      {/* Career Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCareers.map((career, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md shadow-lg text-center transition duration-300 cursor-pointer border-[1px] border-transparent hover:border-yellow-300 hover:scale-105"
            onClick={() => router.push(getNavigationPath(career.title))}
          >
            <img
              src={career.image}
              alt={career.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {career.title}
            </h3>
            <p className="text-sm text-gray-500">
              ({career.options} Career Options)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
