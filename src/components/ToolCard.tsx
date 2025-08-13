interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  link: string;
}

export default function ToolCard({ name, description, category, link }: ToolCardProps) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <span className="text-xs bg-gray-700 px-3 py-1 rounded-full">{category}</span>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-center transition-colors duration-300"
      >
        Visiter l’outil →
      </a>
    </div>
  );
}
