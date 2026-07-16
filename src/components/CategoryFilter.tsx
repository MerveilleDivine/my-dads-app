interface CategoryFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2" aria-label="Catégories d’outils IA">
      {categories.map((category) => {
        const isSelected = category === selectedCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            aria-pressed={isSelected}
            className={`shrink-0 rounded-full px-5 py-3 text-base font-semibold transition ${
              isSelected
                ? "bg-slate-950 text-white shadow-lg shadow-slate-300"
                : "bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-amber-50"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
