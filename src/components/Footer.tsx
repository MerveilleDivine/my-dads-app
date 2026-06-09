export default function Footer() {
  return (
    <footer className="border-t border-amber-100 bg-white py-8 text-center text-slate-500">
      <p className="font-semibold">Une application simple pour découvrir l’IA sans se perdre.</p>
      <p className="mt-2 text-sm">Copyright {new Date().getFullYear()} Boîte IA de Papa.</p>
    </footer>
  );
}
