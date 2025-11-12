import React from "react";
import { Link } from "react-router-dom";

export default function GroupView({ group, appliedGroups }) {
  if (!group) return null;

  const hasApplied = appliedGroups.includes(group.id);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-48 h-48 bg-gray-100 rounded-lg">Img</div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{group.title}</h3>
              <p className="text-sm text-gray-600">{group.course}</p>
              <p className="mt-3 text-gray-700">{group.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">{t}</span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <Link to="/chat" className="px-3 py-1 bg-indigo-600 text-white rounded-md">Enviar Mensaje</Link>
                {hasApplied ? (
                  <Link to="/chat" state={{ group }} className="px-3 py-1 border rounded-md">Ir al Chat</Link>
                ) : (
                  <Link to="/apply" state={{ group }} className="px-3 py-1 border rounded-md">Aplicar al Grupo</Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <Link to="/discover" className="px-3 py-1 border rounded-md">Volver</Link>
        </div>
      </div>
    </div>
  );
}
