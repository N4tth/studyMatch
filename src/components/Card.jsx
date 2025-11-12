import React from "react";
import { Link } from "react-router-dom";

export default function Card({ group, setSelectedGroup }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-32 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Img</div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{group.title}</h3>
        <p className="text-sm text-gray-600">{group.course}</p>
        <p className="mt-2 text-sm text-gray-700 line-clamp-3">{group.description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {group.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">{t}</span>
          ))}
          <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">{group.spots} spots</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="text-sm text-gray-500">{group.schedule}</div>
        <div className="flex gap-2">
          <Link
            to="/group"
            onClick={() => setSelectedGroup(group)}
            className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm"
          >
            Ver
          </Link>
          <Link
            to="/apply"
            onClick={() => setSelectedGroup(group)}
            className="px-3 py-1 rounded-md border border-indigo-200 text-indigo-700 text-sm"
          >
            Aplicar
          </Link>
        </div>
      </div>
    </div>
  );
}
