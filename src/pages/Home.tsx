import { useEffect, useMemo, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import ToolCard from "../components/ToolCard";
import { categories, tools } from "../data/tools";

const FAVORITES_KEY = "dad-ai-toolbox-favorites";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const storedFavorites = window.localStorage.getItem(FAVORITES_KEY);
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const filteredTools = useMemo(() => {
    const normalizedQuery = normalize(query.trim());

    return tools.filter((tool) => {
      const matchesCategory = selectedCategory === "Tous" || tool.category === selectedCategory;
      const searchableContent = normalize(
        [tool.name, tool.description, tool.category, tool.useCase, tool.difficulty].join(" "),
      );
      const matchesSearch = !normalizedQuery || searchableContent.includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });
  }, [query, selectedCategory]);

  const favoriteTools = tools.filter((tool) => favoriteIds.includes(tool.id));

  const toggleFavorite = (toolId: string) => {
    setFavoriteIds((currentFavorites) =>
      currentFavorites.includes(toolId)
        ? currentFavorites.filter((id) => id !== toolId)
        : [...currentFavorites, toolId],
    );
  };

  const resetFilters = () => {
    setQuery("");
    setSelectedCategory("Tous");
  };

  return (
    <div className="min-h-screen bg-amber-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-12 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-amber-700 shadow-sm">
              Un cadeau simple, utile et fait avec amour
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
              La boîte à outils IA de Papa
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              Des outils simples pour écrire, apprendre, créer, organiser et découvrir l’intelligence artificielle sans se perdre.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="text-3xl font-black text-slate-950">{tools.length}</p>
                <p className="text-sm font-semibold text-slate-500">outils utiles</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="text-3xl font-black text-slate-950">{categories.length - 1}</p>
                <p className="text-sm font-semibold text-slate-500">catégories</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="text-3xl font-black text-slate-950">{favoriteIds.length}</p>
                <p className="text-sm font-semibold text-slate-500">favoris gardés</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-300">Comment l’utiliser</p>
            <ol className="mt-5 space-y-4 text-lg leading-8 text-slate-200">
              <li>1. Choisir une catégorie.</li>
              <li>2. Lire “Pour quoi faire ?”.</li>
              <li>3. Ouvrir l’outil ou le garder en favori.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
          <SearchBar value={query} onSearch={setQuery} />
          <div className="mt-4">
            <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div>
        </div>

        {favoriteTools.length > 0 && (
          <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Favoris de Papa</h2>
            <p className="mt-1 text-slate-600">Les outils gardés pour y revenir rapidement.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {favoriteTools.map((tool) => (
                <a key={tool.id} href={tool.link} target="_blank" rel="noopener noreferrer" className="rounded-full bg-amber-100 px-4 py-2 font-bold text-amber-800 hover:bg-amber-200">
                  {tool.name}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-950">Outils disponibles</h2>
            <p className="mt-1 text-slate-600">{filteredTools.length} résultat(s) trouvé(s)</p>
          </div>
          {(query || selectedCategory !== "Tous") && (
            <button type="button" onClick={resetFilters} className="rounded-full bg-white px-4 py-2 font-bold text-slate-700 shadow-sm hover:bg-slate-50">
              Réinitialiser
            </button>
          )}
        </div>

        {filteredTools.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} isFavorite={favoriteIds.includes(tool.id)} onToggleFavorite={toggleFavorite} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl bg-white p-8 text-center shadow-sm">
            <h3 className="text-2xl font-black text-slate-950">Aucun outil trouvé</h3>
            <p className="mt-2 text-slate-600">Essaie un autre mot comme écrire, image, traduction ou présentation.</p>
          </div>
        )}
      </section>
    </div>
  );
}
