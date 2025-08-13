import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ToolCard from "../components/ToolCard";
import CategoryFilter from "../components/CategoryFilter";

export default function Home() {
  const [tools] = useState([
    { name: "ChatGPT", description: "Chatbot IA par OpenAI", category: "Chatbot", link: "#" },
    { name: "MidJourney", description: "Générateur d'images IA", category: "Image", link: "#" },
    { name: "Gamma", description: "Créateur de présentations IA", category: "Productivité", link: "#" },
  ]);
  const [filteredTools, setFilteredTools] = useState(tools);

  const handleSearch = (query: string) => {
    setFilteredTools(tools.filter(t => t.name.toLowerCase().includes(query.toLowerCase())));
  };

  const handleCategorySelect = (cat: string) => {
    if (cat === "Tous") setFilteredTools(tools);
    else setFilteredTools(tools.filter(t => t.category === cat));
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 py-8">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          La boîte à outils IA de Papa
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Une collection des meilleurs outils IA pour rendre ta vie plus facile et plus amusante.  
          Découvre, explore et utilise les dernières innovations en un clic.
        </p>
      </section>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <CategoryFilter
          categories={["Tous", "Chatbot", "Image", "Productivité"]}
          onSelect={handleCategorySelect}
        />
      </div>

      {/* Tools Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredTools.map((tool, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <ToolCard {...tool} />
          </div>
        ))}
      </div>
    </div>
  );
}
