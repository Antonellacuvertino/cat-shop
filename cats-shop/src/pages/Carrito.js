// ✅ Muestra los productos del carrito y permite eliminarlos o vaciar el carrito
<<<<<<< HEAD
=======

>>>>>>> c309a6e84d (cat shop test)
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

<<<<<<< HEAD
// Componente de vista del carrito
export default function Carrito() {
  // Obtenemos del contexto: lista de items, acciones y total calculado
  const { cart, removeFromCart, clearCart, total } = useCart();

  // Si el carrito está vacío, mostramos un mensaje y un botón para ir a la tienda
=======
export default function Carrito() {
  const { cart, removeFromCart, clearCart, total } = useCart();

>>>>>>> c309a6e84d (cat shop test)
  if (cart.length === 0)
    return (
      <div className="container mt-4 text-center">
        <h2>Tu carrito está vacío 🛒</h2>
        <p>Agrega productos desde la tienda.</p>
        <Link className="btn btn-primary" to="/tienda">
          Ir a la tienda
        </Link>
      </div>
    );

<<<<<<< HEAD
  // Render del carrito con tabla de productos, botones de acción y total
=======
>>>>>>> c309a6e84d (cat shop test)
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Carrito de compras</h2>

      <table className="table table-bordered align-middle">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio.toLocaleString()}</td>
              <td>${(item.precio * item.cantidad).toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-danger"
<<<<<<< HEAD
                  onClick={() => removeFromCart(item.id)} // Elimina el item por id
=======
                  onClick={() => removeFromCart(item.id)}
>>>>>>> c309a6e84d (cat shop test)
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-3">
<<<<<<< HEAD
        <button className="btn btn-outline-danger" onClick={clearCart}> {/* Vacía todo el carrito */}
          Vaciar carrito
        </button>
        <h4>Total: ${total.toLocaleString()}</h4> {/* Total acumulado formateado */}
=======
        <button className="btn btn-outline-danger" onClick={clearCart}>
          Vaciar carrito
        </button>
        <h4>Total: ${total.toLocaleString()}</h4>
>>>>>>> c309a6e84d (cat shop test)
      </div>

      <div className="text-end mt-3">
        <Link to="/checkout" className="btn btn-success">
          Proceder al pago
        </Link>
      </div>
    </div>
  );
}
