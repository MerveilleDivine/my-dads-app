import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-amber-100 bg-white/90 text-slate-900 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="text-lg font-black tracking-tight text-slate-950 transition hover:text-amber-700 md:text-xl">
          Boîte IA de Papa
        </Link>
        <div className="flex items-center gap-4">
          <p className="hidden text-sm font-bold text-slate-500 lg:block">
            Des outils IA simples, en français, au même endroit.
          </p>
          <Link
            to="/?favoris=1"
            className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800 hover:bg-amber-200"
          >
            Mes favoris
          </Link>
        </div>
      </div>
    </nav>
  );
}
