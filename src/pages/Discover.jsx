import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function Discover({ mockGroups, setSelectedGroup }) {

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">

        <div className="grid grid-cols-1 gap-4">
          {mockGroups.map((g) => (
            <Card key={g.id} group={g} setSelectedGroup={setSelectedGroup} />
          ))}
        </div>
      </div>
    </div>
  );
}
