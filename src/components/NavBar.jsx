import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ login, handleLogout }) {
  const logged = [
    { to: "/profile", text: "Perfil", className: "text-sm" },
    { to: "/partners", text: "Buscar Compañeros", className: "text-sm" },
  ];

  const unLogged = [
    { to: "/login", text: "Iniciar Sesión", className: "text-sm" },
    { to: "/register", text: "Registrar", className: "px-3 py-1 bg-indigo-600 text-white rounded-md text-sm" },
  ];

  return (
    <header className="max-w-4xl mx-auto w-full p-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded-md">StudyMatch</Link>
      </h1>
      <nav className="flex gap-2">
        {login ? (
          <>
            {logged.map((link, index) => (
              <Link key={index} to={link.to} className={link.className}>
                {link.text}
              </Link>
            ))}
            <button onClick={handleLogout} className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">Cerrar Sesión</button>
          </>
        ) : (
          unLogged.map((link, index) => (
            <Link key={index} to={link.to} className={link.className}>
              {link.text}
            </Link>
          ))
        )}
      </nav>
    </header>
  );
}
