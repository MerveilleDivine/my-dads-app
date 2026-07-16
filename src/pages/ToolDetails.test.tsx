import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ToolDetails from "./ToolDetails";

function renderDetails(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/outils/:toolId" element={<ToolDetails />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("ToolDetails", () => {
  it("renders a complete beginner guide for a known tool", () => {
    renderDetails("/outils/chatgpt");

    expect(screen.getByRole("heading", { name: "ChatGPT" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Première phrase à essayer" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Ouvrir ChatGPT/ })).toHaveAttribute(
      "href",
      "https://chat.openai.com/",
    );
  });

  it("provides a recovery path for an unknown tool", () => {
    renderDetails("/outils/inconnu");

    expect(screen.getByRole("heading", { name: "Cette fiche n’existe pas." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Retour aux outils" })).toHaveAttribute("href", "/");
  });
});
