interface CategoryFilterProps {
  categories: string[];
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ categories, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="px-5 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
