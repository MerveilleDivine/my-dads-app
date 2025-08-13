import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold hover:text-blue-400 transition">
          AI Tools Hub
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
