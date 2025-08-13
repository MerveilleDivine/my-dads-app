export default function CategoryFilter({ categories, onSelect }: 
  { categories: string[]; onSelect: (cat: string) => void }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-blue-400 hover:text-white transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
