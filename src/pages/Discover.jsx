import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function Discover({ mockGroups, setSelectedGroup, appliedGroups }) {
  const [courseFilter, setCourseFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");

  const filteredGroups = mockGroups.filter((group) => {
    const courseMatch = group.course.toLowerCase().includes(courseFilter.toLowerCase());
    const techMatch = techFilter === "" || group.tech.some(t => t.toLowerCase().includes(techFilter.toLowerCase()));
    return courseMatch && techMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 p-4 bg-white rounded-2xl shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Filtrar por materia"
              className="p-2 border rounded-md"
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
            />
            <input
              type="text"
              placeholder="Filtrar por tecnología"
              className="p-2 border rounded-md"
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredGroups.map((g) => (
            <Card key={g.id} group={g} setSelectedGroup={setSelectedGroup} appliedGroups={appliedGroups} />
          ))}
        </div>
      </div>
    </div>
  );
}
