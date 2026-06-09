import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-amber-100 bg-white/90 text-slate-900 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="text-lg font-black tracking-tight text-slate-950 transition hover:text-amber-700 md:text-xl">
          Boîte IA de Papa
        </Link>
        <p className="hidden text-sm font-bold text-slate-500 md:block">
          Des outils IA simples, en français, au même endroit.
        </p>
      </div>
    </nav>
  );
}
