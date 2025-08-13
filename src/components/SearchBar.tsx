import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center bg-gray-800 rounded-full shadow-lg p-2 max-w-lg mx-auto">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Rechercher un outil IA..."
        className="flex-1 bg-transparent outline-none text-white px-4 placeholder-gray-400"
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
        onClick={() => onSearch(value)}
      >
        🔍
      </button>
    </div>
  );
}
