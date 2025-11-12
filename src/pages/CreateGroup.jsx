import React from "react";
import { Link } from "react-router-dom";

export default function CreateGroup() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-2xl p-6 shadow">
        <h3 className="text-lg font-semibold mb-3">Crea un grupo para tu próximo proyecto</h3>
        <form className="flex flex-col gap-3">
          <input className="border p-2 rounded-md" placeholder="Nombre del grupo" />
          <input className="border p-2 rounded-md" placeholder="Asignatura" />
          <textarea className="border p-2 rounded-md" placeholder="Descripción" />
          <input className="border p-2 rounded-md" placeholder="Tecnologías / Habilidades (separadas por coma)" />
          <div className="flex items-center gap-2">
            <label className="text-sm">Máximo de miembros</label>
            <input type="number" defaultValue={4} className="border p-2 rounded-md w-20" />
          </div>
          <div className="flex gap-2 mt-3">
            <Link to="/discover" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Crear Grupo</Link>
            <Link to="/discover" className="px-4 py-2 border rounded-md">Cancelar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
