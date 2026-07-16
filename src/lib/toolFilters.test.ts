import { describe, expect, it } from "vitest";
import { tools } from "../data/tools";
import { filterTools, normalizeText } from "./toolFilters";

describe("tool filters", () => {
  it("normalizes French accents", () => {
    expect(normalizeText("Présentation Écrite")).toBe("presentation ecrite");
  });

  it("searches the full beginner guidance", () => {
    const results = filterTools(tools, {
      query: "confidentiels",
      category: "Tous",
      favoritesOnly: false,
      favoriteIds: [],
    });

    expect(results.map((tool) => tool.id)).toContain("deepl");
  });

  it("combines category and favourite filters", () => {
    const results = filterTools(tools, {
      query: "",
      category: "Images",
      favoritesOnly: true,
      favoriteIds: ["canva", "chatgpt"],
    });

    expect(results.map((tool) => tool.id)).toEqual(["canva"]);
  });
});
