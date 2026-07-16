import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FAVORITES_KEY, parseFavorites, useFavorites } from "./useFavorites";

describe("favourites", () => {
  it("ignores malformed, duplicate, and unknown stored values", () => {
    expect(parseFavorites("not json")).toEqual([]);
    expect(parseFavorites(JSON.stringify(["chatgpt", "unknown", "chatgpt", 42]))).toEqual(["chatgpt"]);
  });

  it("persists toggles with the current storage key", () => {
    const { result } = renderHook(() => useFavorites());

    act(() => result.current.toggleFavorite("chatgpt"));

    expect(result.current.favoriteIds).toEqual(["chatgpt"]);
    expect(window.localStorage.getItem(FAVORITES_KEY)).toBe('["chatgpt"]');

    act(() => result.current.toggleFavorite("chatgpt"));
    expect(result.current.favoriteIds).toEqual([]);
  });
});
