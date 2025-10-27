
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaChartBar,
  FaBoxOpen,
  FaUsers,
  FaTags,
  FaList,
  FaUserCircle,
  FaStore,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Admin() {
  const navigate = useNavigate();

  const adminEmail = localStorage.getItem("adminEmail") || "admin@cats-shop";

  const handleLogout = () => {
    localStorage.removeItem("adminLogged");
    localStorage.removeItem("adminEmail"); // opcional
    navigate("/admin-login");
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f5f6fa" }}>
      {/* Sidebar */}
      <aside
        className="bg-dark text-white p-3"
        style={{ width: 250, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
      >
        <div>
          <h4 className="text-center mb-1">🐾 Cats-Shop</h4>
          <div className="text-center text-white-50 small mb-3">{adminEmail}</div>

          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/admin" className="nav-link text-white">
                <FaChartBar className="me-2" />
                Dashboard
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/orders" className="nav-link text-white">
                <FaList className="me-2" />
                Órdenes
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/products" className="nav-link text-white">
                <FaBoxOpen className="me-2" />
                Productos
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/categories" className="nav-link text-white">
                <FaTags className="me-2" />
                Categorías
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/users" className="nav-link text-white">
                <FaUsers className="me-2" />
                Usuarios
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/reports" className="nav-link text-white">
                <FaChartBar className="me-2" />
                Reportes
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/profile" className="nav-link text-white">
                <FaUserCircle className="me-2" />
                Perfil
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/tienda" className="btn btn-outline-light w-100 mb-2">
            <FaStore className="me-2" />
            Tienda
          </Link>
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Contenido */}
      <main className="flex-grow-1 p-4">
        <h2 className="fw-bold">Dashboard</h2>
        <p className="text-muted">Resumen de las actividades diarias</p>

        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-primary shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Compras</h5>
                <p className="card-text fs-4 m-0">1.234</p>
                <small className="opacity-75">Probabilidad de aumento: 20%</small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-success shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Productos</h5>
                <p className="card-text fs-4 m-0">400</p>
                <small className="opacity-75">Inventario actual: 500</small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card text-white bg-warning shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Usuarios</h5>
                <p className="card-text fs-4 m-0">890</p>
                <small className="opacity-75">Nuevos este mes: 120</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {[
            { icon: <FaChartBar />, title: "Dashboard", desc: "Visión general de métricas." },
            { icon: <FaList />, title: "Órdenes", desc: "Gestión y seguimiento de compras." },
            { icon: <FaBoxOpen />, title: "Productos", desc: "Inventario y detalle de productos." },
            { icon: <FaTags />, title: "Categorías", desc: "Organiza productos por categorías." },
            { icon: <FaUsers />, title: "Usuarios", desc: "Cuentas y roles." },
            { icon: <FaChartBar />, title: "Reportes", desc: "Informes de operaciones." },
            { icon: <FaUserCircle />, title: "Perfil", desc: "Datos personales y preferencias." },
            { icon: <FaStore />, title: "Tienda", desc: "Vista pública de la tienda." },
          ].map((item, idx) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={idx}>
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <div className="fs-3 mb-2">{item.icon}</div>
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="small text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
