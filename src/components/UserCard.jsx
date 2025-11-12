import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-32 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Img</div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.degree}</p>
        <p className="text-sm text-gray-600">{user.uni}</p>
        <div className="mt-3">
          <h4 className="font-semibold text-sm">Horarios Disponibles:</h4>
          {user.schedules && user.schedules.length > 0 ? (
            <ul>
              {user.schedules.map((schedule, index) => (
                <li key={index} className="text-xs text-gray-700">{schedule.day}: {schedule.time}</li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-gray-500">No especificado</p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <Link
          to="/chat"
          state={{ user }}
          className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm"
        >
          Enviar Mensaje
        </Link>
      </div>
    </div>
  );
}
