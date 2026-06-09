import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-amber-100 bg-white/90 text-slate-900 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="text-lg font-black tracking-tight text-slate-950 transition hover:text-amber-700 md:text-xl">
          Boîte IA de Papa
        </Link>
        <div className="hidden items-center gap-6 text-sm font-bold text-slate-600 md:flex">
          <a href="#outils" className="hover:text-amber-700">Outils</a>
          <a href="#favoris" className="hover:text-amber-700">Favoris</a>
          <a href="#guide" className="hover:text-amber-700">Guide</a>
        </div>
      </div>
    </nav>
  );
}
