import React from "react";
import { Link } from "react-router-dom";

export default function Profile({ user }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">Img</div>
          <div>
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.degree}</p>
            <p className="text-sm text-gray-600">{user.uni}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 bg-gray-50 rounded-lg">Intereses</div>
          <div className="p-3 bg-gray-50 rounded-lg">Reputación</div>
        </div>

        <div className="mt-4 flex gap-2">
          <Link to="/discover" className="px-3 py-1 border rounded-md">Explorar</Link>
        </div>
      </div>
    </div>
  );
}
