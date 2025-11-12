import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Auth({ mode = "login", handleLogin, handleRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      handleLogin(email, password);
    } else {
      if (password === confirmPassword) {
        handleRegister({ name, email, password, degree: "Not specified", uni: "Not specified" });
      } else {
        alert("Passwords do not match");
      }
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{mode === "login" ? "Inicia Sesión" : "Crear Cuenta"}</h2>
        <p className="text-sm text-gray-500 mb-4">{mode === "login" ? "¿No tienes una cuenta? Regístrate" : "Registrar usuario"}</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {mode === "register" && (
            <input className="border p-2 rounded-md" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} />
          )}
          <input className="border p-2 rounded-md" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="border p-2 rounded-md" placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {mode === "register" && <input className="border p-2 rounded-md" placeholder="Confirmar contraseña" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />}
          <button type="submit" className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-center">{mode === "login" ? "Iniciar Sesión" : "Registrar"}</button>
        </form>
      </div>
    </div>
  );
}
