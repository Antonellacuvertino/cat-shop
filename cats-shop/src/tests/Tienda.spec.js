// src/tests/Tienda.spec.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tienda from "../pages/Tienda";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";

describe("🛍️ Página Tienda", () => {
  it("renderiza el buscador y permite escribir", () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Tienda />
        </CartProvider>
      </MemoryRouter>
    );

    // Acepta "Buscar producto..." o "Buscar productos..."
    const buscador =
      screen.queryByPlaceholderText(/buscar producto/i) ||
      screen.getByPlaceholderText(/buscar productos/i);

    expect(buscador).toBeTruthy();

    fireEvent.change(buscador, { target: { value: "rascador" } });
    expect(buscador.value).toBe("rascador");
  });

  it("muestra al menos un producto del catálogo", () => {
    render(
      <MemoryRouter>
        <CartProvider>
          <Tienda />
        </CartProvider>
      </MemoryRouter>
    );

    // Busca por el texto "Rascador" en cualquier ProductCard (título)
    const alguno = screen.queryAllByText(/rascador/i);
    expect(alguno.length).toBeGreaterThan(0);
  });
});
