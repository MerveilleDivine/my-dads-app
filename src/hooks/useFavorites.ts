import { useCallback, useEffect, useState } from "react";
import { tools } from "../data/tools";

export const FAVORITES_KEY = "papa-ai-toolbox-favorites";
const LEGACY_FAVORITES_KEY = "dad-ai-toolbox-favorites";
const knownToolIds = new Set(tools.map((tool) => tool.id));

export function parseFavorites(value: string | null): string[] {
  if (!value) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return Array.from(
      new Set(parsed.filter((item): item is string => typeof item === "string" && knownToolIds.has(item))),
    );
  } catch {
    return [];
  }
}

function readStoredFavorites() {
  try {
    const current = window.localStorage.getItem(FAVORITES_KEY);
    if (current !== null) {
      return parseFavorites(current);
    }
    return parseFavorites(window.localStorage.getItem(LEGACY_FAVORITES_KEY));
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(readStoredFavorites);

  useEffect(() => {
    try {
      window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
      window.localStorage.removeItem(LEGACY_FAVORITES_KEY);
    } catch {
      // Favourites still work for the current visit when storage is unavailable.
    }
  }, [favoriteIds]);

  useEffect(() => {
    const synchronizeFavorites = (event: StorageEvent) => {
      if (event.key === FAVORITES_KEY) {
        setFavoriteIds(parseFavorites(event.newValue));
      }
    };

    window.addEventListener("storage", synchronizeFavorites);
    return () => window.removeEventListener("storage", synchronizeFavorites);
  }, []);

  const toggleFavorite = useCallback((toolId: string) => {
    if (!knownToolIds.has(toolId)) {
      return;
    }
    setFavoriteIds((current) =>
      current.includes(toolId) ? current.filter((id) => id !== toolId) : [...current, toolId],
    );
  }, []);

  return { favoriteIds, toggleFavorite };
}
