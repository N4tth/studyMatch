import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";

export default function Partners({ mockUsers, currentUser }) {
  const [degreeFilter, setDegreeFilter] = useState("");
  const [uniFilter, setUniFilter] = useState("");

  const filteredUsers = mockUsers.filter((u) => {
    // Exclude the current user from the list
    if (currentUser && u.id === currentUser.id) {
      return false;
    }

    const degreeMatch = degreeFilter === "" || (u.degree && u.degree.toLowerCase().includes(degreeFilter.toLowerCase()));
    const uniMatch = uniFilter === "" || (u.uni && u.uni.toLowerCase().includes(uniFilter.toLowerCase()));

    return degreeMatch && uniMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 p-4 bg-white rounded-2xl shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Filtrar por carrera"
              className="p-2 border rounded-md"
              value={degreeFilter}
              onChange={(e) => setDegreeFilter(e.target.value)}
            />
            <input
              type="text"
              placeholder="Filtrar por universidad"
              className="p-2 border rounded-md"
              value={uniFilter}
              onChange={(e) => setUniFilter(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredUsers.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </div>
      </div>
    </div>
  );
}
