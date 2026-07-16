import { Link, useParams } from "react-router-dom";
import PromptCopyButton from "../components/PromptCopyButton";
import { tools } from "../data/tools";
import { useFavorites } from "../hooks/useFavorites";

export default function ToolDetails() {
  const { toolId } = useParams();
  const tool = tools.find((candidate) => candidate.id === toolId);
  const { favoriteIds, toggleFavorite } = useFavorites();

  if (!tool) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-700">Outil introuvable</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950">Cette fiche n’existe pas.</h1>
        <p className="mt-4 text-lg text-slate-600">Le lien est peut-être ancien ou incomplet.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 font-bold text-white hover:bg-amber-700"
        >
          Retour aux outils
        </Link>
      </section>
    );
  }

  const isFavorite = favoriteIds.includes(tool.id);

  return (
    <article className="mx-auto max-w-4xl px-5 py-12 md:py-16">
      <Link to="/" className="font-bold text-amber-700 hover:text-amber-900">
        ← Retour à la sélection
      </Link>

      <div className="mt-6 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm md:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">{tool.category}</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">{tool.name}</h1>
          </div>
          <button
            type="button"
            onClick={() => toggleFavorite(tool.id)}
            aria-pressed={isFavorite}
            className={
              isFavorite
                ? "rounded-full bg-amber-600 px-5 py-3 font-bold text-white"
                : "rounded-full bg-amber-100 px-5 py-3 font-bold text-amber-800 hover:bg-amber-200"
            }
          >
            {isFavorite ? "Retirer des favoris" : "Garder en favori"}
          </button>
        </div>

        {tool.highlight && (
          <p className="mt-5 inline-flex rounded-full bg-amber-50 px-4 py-2 font-bold text-amber-800">
            {tool.highlight}
          </p>
        )}

        <p className="mt-6 text-xl leading-8 text-slate-700">{tool.description}</p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="text-sm font-bold uppercase tracking-wide text-slate-500">Difficulté</dt>
            <dd className="mt-2 font-bold text-slate-900">{tool.difficulty}</dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="text-sm font-bold uppercase tracking-wide text-slate-500">Langue</dt>
            <dd className="mt-2 font-bold text-slate-900">
              {tool.frenchFriendly ? "Français disponible" : "Anglais surtout"}
            </dd>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <dt className="text-sm font-bold uppercase tracking-wide text-slate-500">Prix</dt>
            <dd className="mt-2 font-bold text-slate-900">{tool.isFree ? "Option gratuite" : "Payant"}</dd>
          </div>
        </dl>

        <section className="mt-8 rounded-2xl bg-amber-50 p-5">
          <h2 className="text-xl font-black text-slate-950">Pour quoi faire ?</h2>
          <p className="mt-2 leading-7 text-slate-700">{tool.useCase}</p>
        </section>

        <section className="mt-6 rounded-2xl border border-amber-200 p-5">
          <h2 className="text-xl font-black text-slate-950">Première phrase à essayer</h2>
          <blockquote className="mt-3 rounded-xl bg-slate-50 p-4 leading-7 text-slate-800">
            “{tool.starterPrompt}”
          </blockquote>
          <PromptCopyButton prompt={tool.starterPrompt} className="mt-3" />
        </section>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl bg-emerald-50 p-5">
            <h2 className="font-black text-emerald-900">Conseil simple</h2>
            <p className="mt-2 leading-7 text-emerald-950">{tool.beginnerTip}</p>
          </section>
          <section className="rounded-2xl bg-rose-50 p-5">
            <h2 className="font-black text-rose-900">À vérifier</h2>
            <p className="mt-2 leading-7 text-rose-950">{tool.caution}</p>
          </section>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {tool.bestFor.map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-600">
              {item}
            </span>
          ))}
        </div>

        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-lg font-bold text-white hover:bg-amber-600 sm:w-auto"
        >
          Ouvrir {tool.name}
          <span className="ml-2" aria-hidden="true">→</span>
          <span className="sr-only"> dans un nouvel onglet</span>
        </a>
      </div>
    </article>
  );
}
