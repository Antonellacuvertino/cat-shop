
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { MemoryRouter } from "react-router-dom";

describe("🏠 Página Home", () => {
  it("muestra mensaje de bienvenida y link hacia la tienda", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Acepta "Bienvenido" o "Bienvenida", mayúsculas/minúsculas
    const heading = screen.getByRole("heading", { name: /bienvenid[oa]\s+a\s+cats-shop/i });
    expect(heading).toBeTruthy();

  
    const links = screen.getAllByRole("link", { name: /explorar la tienda/i });
    expect(links.length).toBeGreaterThan(0);
    const algunoApuntaATienda = links.some((a) => (a.getAttribute("href") || "").includes("/tienda"));
    expect(algunoApuntaATienda).toBeTrue();
  });
});

