import type { AiTool } from "../data/tools";

export interface ToolFilters {
  query: string;
  category: string;
  favoritesOnly: boolean;
  favoriteIds: readonly string[];
}

export function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("fr")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function searchableText(tool: AiTool) {
  return normalizeText(
    [
      tool.name,
      tool.description,
      tool.category,
      tool.useCase,
      tool.difficulty,
      tool.bestFor.join(" "),
      tool.starterPrompt,
      tool.beginnerTip,
      tool.caution,
    ].join(" "),
  );
}

export function filterTools(allTools: readonly AiTool[], filters: ToolFilters) {
  const normalizedQuery = normalizeText(filters.query.trim());
  const favoriteIds = new Set(filters.favoriteIds);

  return allTools.filter((tool) => {
    const matchesCategory = filters.category === "Tous" || tool.category === filters.category;
    const matchesFavorites = !filters.favoritesOnly || favoriteIds.has(tool.id);
    const matchesSearch = !normalizedQuery || searchableText(tool).includes(normalizedQuery);
    return matchesCategory && matchesFavorites && matchesSearch;
  });
}
