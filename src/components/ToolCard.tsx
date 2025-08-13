export default function ToolCard({ name, description, category, link }: 
  { name: string; description: string; category: string; link: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 mt-3 rounded">
        {category}
      </span>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-500 hover:underline"
      >
        Visit Tool →
      </a>
    </div>
  );
}
