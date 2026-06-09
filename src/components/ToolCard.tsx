import type { AiTool } from "../data/tools";

interface ToolCardProps {
  tool: AiTool;
  isFavorite: boolean;
  onToggleFavorite: (toolId: string) => void;
}

export default function ToolCard({ tool, isFavorite, onToggleFavorite }: ToolCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="mb-2 text-sm font-semibold text-amber-700">{tool.category}</p>
          <h3 className="text-2xl font-bold text-slate-950">{tool.name}</h3>
        </div>
        <button
          type="button"
          onClick={() => onToggleFavorite(tool.id)}
          className={isFavorite ? "rounded-full bg-amber-100 px-3 py-2 text-xl text-amber-700" : "rounded-full bg-slate-100 px-3 py-2 text-xl text-slate-500 hover:bg-amber-50"}
        >
          {isFavorite ? "Favori" : "Garder"}
        </button>
      </div>

      {tool.highlight && (
        <p className="mb-3 rounded-2xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
          {tool.highlight}
        </p>
      )}

      <p className="text-base leading-7 text-slate-700">{tool.description}</p>

      <div className="mt-4 rounded-2xl bg-slate-50 p-4">
        <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Pour quoi faire ?</p>
        <p className="mt-1 text-base leading-7 text-slate-700">{tool.useCase}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
        <span className="rounded-full bg-emerald-50 px-3 py-2 text-emerald-700">{tool.difficulty}</span>
        <span className="rounded-full bg-blue-50 px-3 py-2 text-blue-700">
          {tool.frenchFriendly ? "Français OK" : "Anglais surtout"}
        </span>
        <span className="rounded-full bg-purple-50 px-3 py-2 text-purple-700">
          {tool.isFree ? "Gratuit possible" : "Payant"}
        </span>
      </div>

      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-base font-bold text-white transition hover:bg-amber-600"
      >
        Ouvrir l’outil
        <span className="ml-2">→</span>
      </a>
    </article>
  );
}
