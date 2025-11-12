import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ApplyFlow({ handleApply }) {
  const location = useLocation();
  const { group } = location.state || {};

  useEffect(() => {
    if (group) {
      handleApply(group);
    }
  }, [group, handleApply]);

  if (!group) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow text-center">
          <h3 className="text-lg font-semibold">No has aplicado a ningún grupo</h3>
          <p className="text-sm text-gray-600 mt-2">Vuelve a la página de descubrimiento para encontrar grupos.</p>
          <div className="mt-4 flex gap-2 justify-center">
            <Link to="/discover" className="px-3 py-1 bg-indigo-600 text-white rounded-md">Descubrir grupos</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow text-center">
        <h3 className="text-lg font-semibold">¡Has aplicado al grupo!</h3>
        <p className="text-sm text-gray-600 mt-2">Has aplicado para unirte al grupo "{group.title}".</p>
        <div className="mt-4 flex gap-2 justify-center">
          <Link to="/chat" className="px-3 py-1 bg-indigo-600 text-white rounded-md">Ir al chat</Link>
          <Link to="/discover" className="px-3 py-1 border rounded-md">Seguir explorando</Link>
        </div>
      </div>
    </div>
  );
}
