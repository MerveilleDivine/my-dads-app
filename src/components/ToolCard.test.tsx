import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { tools } from "../data/tools";
import ToolCard from "./ToolCard";

describe("ToolCard", () => {
  it("supports accessible favourites and prompt copying", async () => {
    const user = userEvent.setup();
    const toggleFavorite = vi.fn();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(
      <MemoryRouter>
        <ToolCard tool={tools[0]} isFavorite={false} onToggleFavorite={toggleFavorite} />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: "Ajouter ChatGPT aux favoris" }));
    expect(toggleFavorite).toHaveBeenCalledWith("chatgpt");

    await user.click(screen.getByRole("button", { name: "Voir comment commencer" }));
    await user.click(screen.getByRole("button", { name: "Copier la phrase" }));

    expect(writeText).toHaveBeenCalledWith(tools[0].starterPrompt);
    expect(screen.getByRole("button", { name: "Phrase copiée" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Voir la fiche" })).toHaveAttribute("href", "/outils/chatgpt");
  });
});
