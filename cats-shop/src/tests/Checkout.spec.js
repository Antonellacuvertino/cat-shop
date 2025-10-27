// Checkout.spec.js
// Verifica que el formulario del Checkout renderice correctamente,
// actualice los campos, y muestre mensajes de error cuando se intenta enviar vacío.

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkout from "../pages/Checkout";
import { CartProvider } from "../context/CartContext";
import { MemoryRouter } from "react-router-dom";

const renderWithProviders = (ui) => {
  return render(
    <CartProvider>
      <MemoryRouter>{ui}</MemoryRouter>
    </CartProvider>
  );
};

describe("🧾 Componente Checkout", () => {
  it("renderiza los campos del formulario", () => {
    renderWithProviders(<Checkout />);
    expect(screen.getByText("Checkout")).toBeTruthy();
    expect(screen.getByLabelText("Nombre completo")).toBeTruthy();
    expect(screen.getByLabelText("Email")).toBeTruthy();
  });

  it("actualiza valores al escribir", () => {
    renderWithProviders(<Checkout />);
    const inputNombre = screen.getByLabelText("Nombre completo");
    fireEvent.change(inputNombre, { target: { value: "Antonella" } });
    expect(inputNombre.value).toBe("Antonella");
  });

  it("muestra errores si se intenta enviar vacío", () => {
    renderWithProviders(<Checkout />);
    const form = screen.getByTestId("form-checkout");
    fireEvent.submit(form);
    expect(screen.getByText(/El nombre es obligatorio/i)).toBeTruthy();
  });
});
