import React from "react";
import { Link } from "react-router-dom";

export default function Auth({ mode = "login" }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{mode === "login" ? "Inicia Sesión" : "Crear Cuenta"}</h2>
        <p className="text-sm text-gray-500 mb-4">{mode === "login" ? "¿Ya tienes una cuenta? Inicia Sesión" : "Registrar usuario"}</p>
        <form className="flex flex-col gap-3">
          {mode === "register" && (
            <input className="border p-2 rounded-md" placeholder="Nombre completo" />
          )}
          <input className="border p-2 rounded-md" placeholder="Correo electrónico" />
          <input className="border p-2 rounded-md" placeholder="Contraseña" type="password" />
          {mode === "register" && <input className="border p-2 rounded-md" placeholder="Confirmar contraseña" type="password" />}
          <Link to="/" className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-center">{mode === "login" ? "Iniciar Sesión" : "Registrar"}</Link>
        </form>
      </div>
    </div>
  );
}
