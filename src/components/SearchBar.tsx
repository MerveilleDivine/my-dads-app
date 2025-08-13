import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search AI tools..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 w-full"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
}
// This SearchBar component allows users to input a search query and triggers a search action when the button is clicked.