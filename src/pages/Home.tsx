import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ToolCard from "../components/ToolCard";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";

export default function Home() {
  const initialTools = [
    { name: "ChatGPT", description: "AI chatbot by OpenAI", category: "Chatbot", link: "#" },
    { name: "MidJourney", description: "AI image generator", category: "Image", link: "#" },
  ];

  const [tools, setTools] = useState(initialTools);
  const [filteredTools, setFilteredTools] = useState(initialTools);
  const [currentPage, setCurrentPage] = useState(1);
  const toolsPerPage = 6;

  // Sync filteredTools when tools list changes
  useEffect(() => {
    setFilteredTools(tools);
  }, [tools]);

  const handleSearch = (query: string) => {
    const results = tools.filter(t => 
      t.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTools(results);
    setCurrentPage(1);
  };

  const handleCategorySelect = (cat: string) => {
    if (cat === "All") {
      setFilteredTools(tools);
    } else {
      setFilteredTools(tools.filter(t => t.category === cat));
    }
    setCurrentPage(1);
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * toolsPerPage;
  const currentTools = filteredTools.slice(startIndex, startIndex + toolsPerPage);
  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);

  // Example: Adding a new tool dynamically
  const addTool = () => {
    const newTool = { 
      name: "New Tool", 
      description: "Example tool added dynamically", 
      category: "Code", 
      link: "#" 
    };
    setTools(prev => [...prev, newTool]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <SearchBar onSearch={handleSearch} />
        <button 
          onClick={addTool} 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          + Add Tool
        </button>
      </div>

      <div className="mt-4">
        <CategoryFilter 
          categories={["All", "Chatbot", "Image", "Video", "Code"]} 
          onSelect={handleCategorySelect} 
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {currentTools.length > 0 ? (
          currentTools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No tools found.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      )}
    </div>
  );
}
