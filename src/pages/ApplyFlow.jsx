import React from "react";
import { Link } from "react-router-dom";

export default function ApplyFlow() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow text-center">
        <h3 className="text-lg font-semibold">¡Hiciste un match!</h3>
        <p className="text-sm text-gray-600 mt-2">Tú e Isabella Rossi se unieron para conquistar el próximo proyecto.</p>
        <div className="mt-4 flex gap-2 justify-center">
          <Link to="/chat" className="px-3 py-1 bg-indigo-600 text-white rounded-md">Ir al chat</Link>
          <Link to="/discover" className="px-3 py-1 border rounded-md">Seguir explorando</Link>
        </div>
      </div>
    </div>
  );
}
