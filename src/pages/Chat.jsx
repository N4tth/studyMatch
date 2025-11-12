import React from "react";

export default function Chat() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-4 shadow flex flex-col h-[80vh]">
        <div className="flex items-center gap-3 border-b pb-3">
          <div className="w-12 h-12 bg-gray-100 rounded-full" />
          <div>
            <div className="font-semibold">Isabella Rossi</div>
            <div className="text-sm text-gray-500">Ingenieria de Sistemas, 4to semestre</div>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-3">
          <div className="text-sm text-gray-600">(Mensajes de ejemplo)</div>
        </div>
        <div className="pt-3">
          <div className="flex gap-2">
            <input className="flex-1 border p-2 rounded-md" placeholder="Escribe un mensaje..." />
            <button className="px-3 py-2 bg-indigo-600 text-white rounded-md">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
