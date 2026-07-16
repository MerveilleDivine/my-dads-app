import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import ToolCard from "../components/ToolCard";
import { categories, tools } from "../data/tools";
import { useFavorites } from "../hooks/useFavorites";
import { filterTools } from "../lib/toolFilters";

const guideSteps = [
  {
    title: "Commencer petit",
    text: "Pose une question simple et précise. Une bonne question donne souvent une meilleure réponse.",
  },
  {
    title: "Donner le contexte",
    text: "Explique à l’outil ce que tu veux faire, pour qui, dans quel ton et avec quel niveau de détail.",
  },
  {
    title: "Vérifier avant d’utiliser",
    text: "Pour les sujets importants, vérifie toujours les informations avec une source fiable ou une personne compétente.",
  },
  {
    title: "Protéger les informations privées",
    text: "Évite de coller des documents sensibles, des mots de passe, des données bancaires ou des informations confidentielles.",
  },
];

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favoriteIds, toggleFavorite } = useFavorites();
  const query = searchParams.get("q") ?? "";
  const requestedCategory = searchParams.get("categorie") ?? "Tous";
  const selectedCategory = categories.some((category) => category === requestedCategory)
    ? requestedCategory
    : "Tous";
  const favoritesOnly = searchParams.get("favoris") === "1";

  const updateFilter = (key: "q" | "categorie" | "favoris", value: string) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === "Tous" || value === "0") {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  };

  const filteredTools = useMemo(() => {
    return filterTools(tools, {
      query,
      category: selectedCategory,
      favoritesOnly,
      favoriteIds,
    });
  }, [favoriteIds, favoritesOnly, query, selectedCategory]);

  const favoriteTools = tools.filter((tool) => favoriteIds.includes(tool.id));

  const resetFilters = () => {
    setSearchParams({}, { replace: true });
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

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">Guide débutant</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Utiliser l’IA sans se perdre</h2>
            <p className="mt-2 text-slate-600">Quelques règles simples pour obtenir de meilleures réponses et rester prudent.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {guideSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-amber-50 p-4">
                <p className="text-sm font-black text-amber-700">Règle {index + 1}</p>
                <h3 className="mt-2 text-lg font-black text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="rounded-3xl bg-white/80 p-5 shadow-sm">
          <SearchBar value={query} onSearch={(value) => updateFilter("q", value)} />
          <div className="mt-4">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={(category) => updateFilter("categorie", category)}
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-slate-500">
              La recherche et les filtres restent dans l’adresse pour pouvoir partager cette sélection.
            </p>
            <button
              type="button"
              onClick={() => updateFilter("favoris", favoritesOnly ? "0" : "1")}
              aria-pressed={favoritesOnly}
              className={
                favoritesOnly
                  ? "rounded-full bg-amber-600 px-4 py-2 font-bold text-white"
                  : "rounded-full bg-amber-100 px-4 py-2 font-bold text-amber-800 hover:bg-amber-200"
              }
            >
              {favoritesOnly ? "Voir tous les outils" : `Voir mes favoris (${favoriteIds.length})`}
            </button>
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
            <p className="mt-1 text-slate-600" aria-live="polite">
              {filteredTools.length} résultat(s) trouvé(s)
            </p>
          </div>
          {(query || selectedCategory !== "Tous" || favoritesOnly) && (
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
            <p className="mt-2 text-slate-600">
              {favoritesOnly && favoriteIds.length === 0
                ? "Garde d’abord un outil en favori, puis il apparaîtra ici."
                : "Essaie un autre mot comme écrire, image, traduction ou présentation."}
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-full bg-slate-950 px-5 py-3 font-bold text-white hover:bg-amber-700"
            >
              Afficher tous les outils
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
