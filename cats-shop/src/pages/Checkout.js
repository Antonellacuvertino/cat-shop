<<<<<<< HEAD
=======
// src/pages/Checkout.jsx
// ✅ Formulario de Checkout con inputs controlados, validaciones,
// labels asociados (htmlFor/id), guardado de orden y redirección a /success.
>>>>>>> c309a6e84d (cat shop test)

import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
<<<<<<< HEAD
  // Estado del formulario (inputs controlados)
=======
>>>>>>> c309a6e84d (cat shop test)
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    comuna: "",
    metodoEntrega: "envio", // "envio" | "retiro"
    metodoPago: "debito",   // "debito" | "credito" | "transferencia"
    aceptaTerminos: false,
  });

<<<<<<< HEAD
  // Estado de errores de validación por campo
  const [errors, setErrors] = useState({});

  // Acceso al carrito y total desde el contexto global
  const { cart, total, clearCart } = useCart();

  // Para redirecciones (success/fail)
  const navigate = useNavigate();

  // Si el carrito está vacío, no permitimos checkout
  useEffect(() => {
    if (cart.length === 0) {
      // Guardamos un mensaje para mostrar al usuario si llega acá sin items
=======
  const [errors, setErrors] = useState({});
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  // Si no hay productos, deja un mensaje informativo (útil si entran directo)
  useEffect(() => {
    if (cart.length === 0) {
>>>>>>> c309a6e84d (cat shop test)
      localStorage.setItem("msg", "Tu carrito está vacío. Agrega productos antes de pagar.");
    }
  }, [cart.length]);

<<<<<<< HEAD
  // Maneja cambios de inputs (controlados)
=======
  // Maneja cambios de cualquier input controlado
>>>>>>> c309a6e84d (cat shop test)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

<<<<<<< HEAD
  // Validaciones simples (puedes extenderlas si el profe lo pide)
=======
  // Validaciones básicas y claras para la defensa
>>>>>>> c309a6e84d (cat shop test)
  const validate = () => {
    const newErr = {};

    if (!form.nombre.trim()) newErr.nombre = "El nombre es obligatorio.";
<<<<<<< HEAD
=======

>>>>>>> c309a6e84d (cat shop test)
    if (!form.email.trim()) {
      newErr.email = "El email es obligatorio.";
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(form.email)) newErr.email = "Formato de email inválido.";
    }
<<<<<<< HEAD
=======

>>>>>>> c309a6e84d (cat shop test)
    if (!form.telefono.trim()) {
      newErr.telefono = "El teléfono es obligatorio.";
    } else if (form.telefono.replace(/\D/g, "").length < 8) {
      newErr.telefono = "El teléfono debe tener al menos 8 dígitos.";
    }
<<<<<<< HEAD
=======

>>>>>>> c309a6e84d (cat shop test)
    if (form.metodoEntrega === "envio") {
      if (!form.direccion.trim()) newErr.direccion = "La dirección es obligatoria para envío.";
      if (!form.comuna.trim()) newErr.comuna = "La comuna es obligatoria para envío.";
    }
<<<<<<< HEAD
    if (!form.aceptaTerminos) newErr.aceptaTerminos = "Debes aceptar los términos y condiciones.";

    setErrors(newErr);
    return Object.keys(newErr).length === 0; // true si no hay errores
  };

  // Enviar formulario (simulación de pago)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Si no hay items en carrito, no permitir
=======

    if (!form.aceptaTerminos) newErr.aceptaTerminos = "Debes aceptar los términos y condiciones.";

    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  // Simulación de pago y redirección
  const handleSubmit = (e) => {
    e.preventDefault();

>>>>>>> c309a6e84d (cat shop test)
    if (cart.length === 0) {
      alert("Tu carrito está vacío. Agrega productos antes de pagar.");
      return;
    }
<<<<<<< HEAD

    // Validar campos
    if (!validate()) return;

    // Simulación de proceso de pago OK:
    // Guardamos un resumen de la compra para mostrar en /success
=======
    if (!validate()) return;

>>>>>>> c309a6e84d (cat shop test)
    const resumen = {
      comprador: {
        nombre: form.nombre,
        email: form.email,
        telefono: form.telefono,
        direccion: form.metodoEntrega === "envio" ? form.direccion : "Retiro en tienda",
        comuna: form.metodoEntrega === "envio" ? form.comuna : "-",
      },
      items: cart,
      total,
      fecha: new Date().toISOString(),
      metodoEntrega: form.metodoEntrega,
      metodoPago: form.metodoPago,
    };

    localStorage.setItem("last_order", JSON.stringify(resumen));
<<<<<<< HEAD

    // Limpiamos carrito para simular compra finalizada
    clearCart();

    // Redirigimos a compra exitosa
=======
    clearCart();
>>>>>>> c309a6e84d (cat shop test)
    navigate("/success");
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
<<<<<<< HEAD
=======

>>>>>>> c309a6e84d (cat shop test)
      {cart.length === 0 && (
        <div className="alert alert-warning my-3">
          Tu carrito está vacío. <a href="/tienda">Volver a la tienda</a>
        </div>
      )}

      <form className="row g-3 mt-1" onSubmit={handleSubmit} data-testid="form-checkout">
        {/* Nombre */}
        <div className="col-md-6">
<<<<<<< HEAD
          <label className="form-label">Nombre completo</label>
          <input
=======
          <label className="form-label" htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
>>>>>>> c309a6e84d (cat shop test)
            name="nombre"
            className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ej: Antonella Cuvertino"
          />
          {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
        </div>

        {/* Email */}
        <div className="col-md-6">
<<<<<<< HEAD
          <label className="form-label">Email</label>
          <input
=======
          <label className="form-label" htmlFor="email">Email</label>
          <input
            id="email"
>>>>>>> c309a6e84d (cat shop test)
            name="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={form.email}
            onChange={handleChange}
            placeholder="antonella@correo.com"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Teléfono */}
        <div className="col-md-6">
<<<<<<< HEAD
          <label className="form-label">Teléfono</label>
          <input
=======
          <label className="form-label" htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
>>>>>>> c309a6e84d (cat shop test)
            name="telefono"
            className={`form-control ${errors.telefono ? "is-invalid" : ""}`}
            value={form.telefono}
            onChange={handleChange}
            placeholder="+56 9 1234 5678"
          />
          {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
        </div>

        {/* Método de entrega */}
        <div className="col-md-6">
<<<<<<< HEAD
          <label className="form-label">Método de entrega</label>
          <select
=======
          <label className="form-label" htmlFor="metodoEntrega">Método de entrega</label>
          <select
            id="metodoEntrega"
>>>>>>> c309a6e84d (cat shop test)
            name="metodoEntrega"
            className="form-select"
            value={form.metodoEntrega}
            onChange={handleChange}
          >
            <option value="envio">Envío a domicilio</option>
            <option value="retiro">Retiro en tienda</option>
          </select>
        </div>

        {/* Dirección y Comuna (solo si envío) */}
        {form.metodoEntrega === "envio" && (
          <>
            <div className="col-md-8">
<<<<<<< HEAD
              <label className="form-label">Dirección</label>
              <input
=======
              <label className="form-label" htmlFor="direccion">Dirección</label>
              <input
                id="direccion"
>>>>>>> c309a6e84d (cat shop test)
                name="direccion"
                className={`form-control ${errors.direccion ? "is-invalid" : ""}`}
                value={form.direccion}
                onChange={handleChange}
                placeholder="Ej: Av. Pedro de Valdivia 1234"
              />
              {errors.direccion && <div className="invalid-feedback">{errors.direccion}</div>}
            </div>
<<<<<<< HEAD
            <div className="col-md-4">
              <label className="form-label">Comuna</label>
              <input
=======

            <div className="col-md-4">
              <label className="form-label" htmlFor="comuna">Comuna</label>
              <input
                id="comuna"
>>>>>>> c309a6e84d (cat shop test)
                name="comuna"
                className={`form-control ${errors.comuna ? "is-invalid" : ""}`}
                value={form.comuna}
                onChange={handleChange}
                placeholder="Ej: Ñuñoa"
              />
              {errors.comuna && <div className="invalid-feedback">{errors.comuna}</div>}
            </div>
          </>
        )}

        {/* Método de pago */}
        <div className="col-md-6">
<<<<<<< HEAD
          <label className="form-label">Método de pago</label>
          <select
=======
          <label className="form-label" htmlFor="metodoPago">Método de pago</label>
          <select
            id="metodoPago"
>>>>>>> c309a6e84d (cat shop test)
            name="metodoPago"
            className="form-select"
            value={form.metodoPago}
            onChange={handleChange}
          >
            <option value="debito">Débito</option>
            <option value="credito">Crédito</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>

        {/* Acepta términos */}
        <div className="col-12">
          <div className="form-check">
            <input
              id="acepta"
              name="aceptaTerminos"
              type="checkbox"
              className={`form-check-input ${errors.aceptaTerminos ? "is-invalid" : ""}`}
              checked={form.aceptaTerminos}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="acepta">
              Acepto los términos y condiciones
            </label>
            {errors.aceptaTerminos && (
              <div className="invalid-feedback d-block">{errors.aceptaTerminos}</div>
            )}
          </div>
        </div>

        {/* Resumen y botón */}
        <div className="col-12 d-flex justify-content-between align-items-center mt-2">
<<<<<<< HEAD
          <h4>Total: ${total.toLocaleString()}</h4>
=======
          <h4>Total: ${total.toLocaleString("es-CL")}</h4>
>>>>>>> c309a6e84d (cat shop test)
          <button
            type="submit"
            className="btn btn-success"
            disabled={cart.length === 0}
            data-testid="btn-pagar"
          >
<<<<<<< HEAD
            Pagar ahora
=======
            Finalizar compra
>>>>>>> c309a6e84d (cat shop test)
          </button>
        </div>
      </form>
    </div>
  );
}
