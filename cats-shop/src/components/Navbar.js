// Importamos React para poder usar JSX y definir componentes
import React from "react";

// Importamos el componente Link para navegación interna sin recargar la página
import { Link } from "react-router-dom";

// Importamos el hook personalizado useCart desde el contexto global del carrito
// Este contexto permite acceder a los datos del carrito desde cualquier parte de la app
import { useCart } from "../context/CartContext";

// Definimos el componente Navbar (barra de navegación principal del sitio)
export default function Navbar() {

  // Obtenemos el estado global del carrito desde el contexto
  // Aquí accedemos a la propiedad 'cart', que contiene un array con los productos agregados
  const { cart } = useCart();

  // Calculamos la cantidad total de productos sumando las cantidades de cada ítem del carrito
  // 'reduce' recorre el array 'cart' y acumula el total en 'acc'
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  // Retornamos el JSX que renderiza la barra de navegación
  return (
    // Etiqueta <header> que envuelve toda la barra superior
    // Tiene clases de Bootstrap para fondo blanco, sombra y posición fija arriba
    <header className="navbar-white shadow-sm sticky-top bg-white">
      <div className="container">
        {/* Elemento <nav> que contiene todos los enlaces de navegación */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">

            {/* ==================== LOGO ==================== */}
            {/* Centramos el logo horizontalmente con 'mx-auto order-0 text-center' */}
            <div className="mx-auto order-0 text-center">
              {/* Usamos <Link> para navegar al inicio sin recargar la página */}
              <Link className="navbar-brand fw-bold" to="/">
                <img
                  src="/img/logo.png"       // Ruta del logo
                  alt="cats-shop"           // Texto alternativo (importante para accesibilidad)
                  style={{ height: "50px" }} // Altura del logo
                />
              </Link>
            </div>

            {/* ==================== MENÚ PRINCIPAL ==================== */}
            {/* Se colapsa en pantallas pequeñas (usando Bootstrap) */}
            <div className="collapse navbar-collapse order-1" id="navMenu">
              <ul className="navbar-nav ms-auto align-items-center">

                {/* ====== Enlaces principales ====== */}
                <li className="nav-item">
                  <Link className="nav-link" to="/tienda">
                    🛍️ Tienda
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/categorias">
                    🐱 Categorías
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/ofertas">
                    💸 Ofertas
                  </Link>
                </li>

                {/* ====== Enlace al login de administrador ====== */}
                <li className="nav-item">
                  <Link className="nav-link" to="/admin-login">
                    🔐 Admin
                  </Link>
                </li>

                {/* ====== Carrito con contador dinámico ====== */}
                <li className="nav-item position-relative">
                  <Link className="nav-link" to="/carrito">
                    🛒
                    {/* Si hay productos en el carrito, mostramos un contador (badge rojo) */}
                    {totalItems > 0 && (
                      <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
