import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-amber-700">Page introuvable</p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">Revenons aux outils utiles.</h1>
      <p className="mt-4 text-lg text-slate-600">Cette adresse ne correspond à aucune page de l’application.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 font-bold text-white hover:bg-amber-700"
      >
        Retour à l’accueil
      </Link>
    </section>
  );
}
