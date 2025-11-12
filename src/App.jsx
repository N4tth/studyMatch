import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Discover from "./pages/Discover";
import GroupView from "./pages/GroupView";
import CreateGroup from "./pages/CreateGroup";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import ApplyFlow from "./pages/ApplyFlow";
import NavBar from "./components/NavBar";

export default function App() {
  const [user, setUser] = useState({ name: "Alex", degree: "Ingeniería de sistemas", uni: "Universidad del Valle" });
  const [selectedGroup, setSelectedGroup] = useState(null);

  const [logged, setLogged] = useState(true);
  
  const mockGroups = [
    {
      id: 1,
      title: "Miniproyecto 3 - Proyecto integrador I",
      course: "Proyecto integrador I",
      tech: ["JavaScript", "Java"],
      members: 3,
      spots: 1,
      schedule: "Online Mar y Mié, 6-8 pm",
      description:
        "Somos un grupo que se está formando para trabajar en el Miniproyecto 3 de la asignatura Proyecto Integrador, utilizando JavaScript y Java. ¡Buscamos un integrante más!",
    },
    {
      id: 2,
      title: "Proyecto de gestión de proyectos",
      course: "Proyecto integrador II",
      tech: ["MongoDB", "React", "Javascript"],
      members: 2,
      spots: 2,
      schedule: "Online Mar y Mierc. 6-8 pm",
      description:
        "Este grupo se enfoca en desarrollar una aplicación de gestión de proyectos desde cero, aplicando metodologías ágiles como Scrum.",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col">
      <NavBar title="StudyMatch" login={logged} />
      <Routes>
        <Route path="/" element={<Landing login={logged} />} />
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/register" element={<Auth mode="register" />} />
        <Route path="/discover" element={<Discover mockGroups={mockGroups} setSelectedGroup={setSelectedGroup} />} />
        <Route path="/group" element={<GroupView group={selectedGroup} />} />
        <Route path="/create" element={<CreateGroup />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/apply" element={<ApplyFlow />} />
      </Routes>
      </div>

      <footer className="max-w-4xl mx-auto w-full p-6 text-center text-sm text-gray-500">© StudyMatch</footer>
    </div>
  );
}