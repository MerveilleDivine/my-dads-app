import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Home from "./Home";

function renderHome(entry = "/") {
  return render(
    <MemoryRouter initialEntries={[entry]}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("Home", () => {
  it("restores shareable category filters from the URL", () => {
    renderHome("/?categorie=Images");

    expect(screen.getByRole("heading", { name: "Canva" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Leonardo AI" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "DeepL" })).not.toBeInTheDocument();
    expect(screen.getByText("2 résultat(s) trouvé(s)")).toBeInTheDocument();
  });

  it("keeps favourites and offers a focused favourite view", async () => {
    const user = userEvent.setup();
    renderHome();

    await user.click(screen.getByRole("button", { name: "Ajouter ChatGPT aux favoris" }));
    await user.click(screen.getByRole("button", { name: "Voir mes favoris (1)" }));

    expect(screen.getByRole("heading", { name: "ChatGPT" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "DeepL" })).not.toBeInTheDocument();
    expect(screen.getByText("1 résultat(s) trouvé(s)")).toBeInTheDocument();
  });
});
