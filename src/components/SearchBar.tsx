import type { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({ value, onSearch }: SearchBarProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <label className="block" htmlFor="tool-search">
      <span className="sr-only">Rechercher un outil IA</span>
      <div className="flex items-center rounded-3xl border border-amber-200 bg-white/90 px-4 py-3 shadow-sm shadow-amber-100 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-100">
        <span aria-hidden="true" className="mr-3 text-2xl">
          🔍
        </span>
        <input
          id="tool-search"
          type="search"
          value={value}
          onChange={handleChange}
          placeholder="Rechercher : écrire, image, traduction, présentation..."
          className="w-full bg-transparent text-lg text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
    </label>
  );
}
