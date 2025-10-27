import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Páginas
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Contextos (si los usas)
import { CartProvider } from "./context/CartContext";

// ✅ Componente para proteger la ruta del admin
function PrivateRoute({ children }) {
  const isLogged = localStorage.getItem("adminLogged") === "true"; // // Lee flag de sesión desde localStorage
  return isLogged ? children : <Navigate to="/admin-login" />; // // Si no está logeado, redirige al login admin
}

export default function App() {
  return (
    <CartProvider> {/* // Proveedor global del carrito para toda la app */}
      <Router> {/* // Enrutador principal de React Router */}
        {/* Navbar visible en todas las páginas */}
        <Navbar />

        <Routes> {/* // Define las rutas de la aplicación */}
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} /> {/* // Página de inicio */}
          <Route path="/tienda" element={<Tienda />} /> {/* // Listado/tienda de productos */}
          <Route path="/admin-login" element={<AdminLogin />} /> {/* // Login del admin */}

          {/* Ruta protegida */}
          <Route
            path="/admin"
            element={
              <PrivateRoute> {/* // Protege el panel admin verificando adminLogged */}
                <Admin />
              </PrivateRoute>
            }
          />

          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" />} /> {/* // Cualquier ruta no encontrada -> Home */}
        </Routes>

        {/* Footer global */}
        <Footer /> {/* // Pie de página común a todas las vistas */}
      </Router>
    </CartProvider>
  );
}
