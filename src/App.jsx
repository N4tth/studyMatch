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

import ProtectedRoute from "./components/ProtectedRoute";
import Partners from "./pages/Partners";

export default function App() {
  const [user, setUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [appliedGroups, setAppliedGroups] = useState([]);
  const [logged, setLogged] = useState(false);

  const [mockUsers, setMockUsers] = useState([
    { id: 1, name: "Alex", degree: "Ingeniería de sistemas", uni: "Universidad del Valle", email: "alex@gmail.com", password: "pass", schedules: [{day: "Lunes", time: "2-4pm"}, {day: "Martes", time: "4-6pm"}] },
    { id: 2, name: "Isabella", degree: "Diseño Gráfico", uni: "Universidad Javeriana", email: "isabella@gmail.com", password: "pass", schedules: [{day: "Miercoles", time: "8-10am"}, {day: "Jueves", time: "10-12am"}] },
  ]);

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
      degree: "Ingeniería de sistemas",
      uni: "Universidad del Valle",
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
      degree: "Diseño Gráfico",
      uni: "Universidad Javeriana",
    },
  ];

  const handleApply = (group) => {
    setAppliedGroups([...appliedGroups, group.id]);
  };

  const handleLogin = (email, password) => {
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      setLogged(true);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLogged(false);
  };

  const handleRegister = (newUser) => {
    const userExists = mockUsers.some(u => u.email === newUser.email);
    if (!userExists) {
      const user = { ...newUser, id: mockUsers.length + 1, schedules: [] };
      setMockUsers([...mockUsers, user]);
      setUser(user);
      setLogged(true);
    }
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = mockUsers.map(u => u.id === updatedUser.id ? updatedUser : u);
    setMockUsers(updatedUsers);
    setUser(updatedUser);
  };

  return (
    <div className="font-sans text-gray-800">
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col">
        <NavBar title="StudyMatch" login={logged} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Landing login={logged} />} />
          <Route path="/login" element={<Auth mode="login" handleLogin={handleLogin} />} />
          <Route path="/register" element={<Auth mode="register" handleRegister={handleRegister} />} />
          <Route path="/discover" element={<ProtectedRoute login={logged}><Discover mockGroups={mockGroups} setSelectedGroup={setSelectedGroup} appliedGroups={appliedGroups} /></ProtectedRoute>} />
          <Route path="/group" element={<ProtectedRoute login={logged}><GroupView group={selectedGroup} handleApply={handleApply} appliedGroups={appliedGroups} /></ProtectedRoute>} />
          <Route path="/create" element={<ProtectedRoute login={logged}><CreateGroup /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute login={logged}><Profile user={user} handleUpdateUser={handleUpdateUser} /></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute login={logged}><Chat /></ProtectedRoute>} />
          <Route path="/apply" element={<ProtectedRoute login={logged}><ApplyFlow handleApply={handleApply} /></ProtectedRoute>} />
          <Route path="/partners" element={<ProtectedRoute login={logged}><Partners mockUsers={mockUsers} currentUser={user} /></ProtectedRoute>} />
        </Routes>
      </div>

      <footer className="max-w-4xl mx-auto w-full p-6 text-center text-sm text-gray-500">© StudyMatch</footer>
    </div>
  );
}