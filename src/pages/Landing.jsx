import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {

  return (
    <div>
      <main className="max-w-4xl mx-auto w-full p-6 flex-1 flex flex-col gap-6">
        <section className="bg-white rounded-2xl p-6 shadow-md flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Conecta, colabora y encuentra tu grupo de estudio ideal.</h2>
            <p className="mt-2 text-gray-600">Find Study Groups - Join existing groups based on your courses and interests.</p>
            <div className="mt-4 flex gap-3">
              <Link to="/discover" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Find Study Groups</Link>
              <Link to="/partners" className="px-4 py-2 border rounded-md">Find Study Partners</Link>
            </div>
          </div>
          <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">ILLUSTRATION</div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">Mini feature card 1</div>
          <div className="bg-white p-4 rounded-xl shadow">Mini feature card 2</div>
        </section>
      </main>

    </div>
    
  );
}
