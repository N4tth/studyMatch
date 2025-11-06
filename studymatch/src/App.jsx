import React, { useState } from "react";

// StudyMatch - Single-file React prototype (Tailwind CSS required)

export default function App() {
  const [view, setView] = useState("landing");
  const [user, setUser] = useState({ name: "Alex", degree: "Ingeniería de sistemas", uni: "Universidad del Valle" });
  const [selectedGroup, setSelectedGroup] = useState(null);

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
      title: "Miniproyecto 3",
      course: "Proyecto integrador I",
      tech: ["MongoDB", "React", "Javascript"],
      members: 2,
      spots: 2,
      schedule: "Online Mar y Mierc. 6-8 pm",
      description:
        "Este grupo se enfoca en desarrollar una aplicación de gestión de proyectos desde cero, aplicando metodologías ágiles como Scrum.",
    },
  ];

  const mockProfiles = [
    {
      id: 10,
      name: "Isabella Rossi",
      degree: "Ingeniería de Sistemas, 4to semestre",
      skills: ["Frontend", "Base de datos", "Diseño"],
      lookingFor: "Busco grupo para el Miniproyecto 3...",
    },
  ];

  function Card({ group }) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-32 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">Img</div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{group.title}</h3>
          <p className="text-sm text-gray-600">{group.course}</p>
          <p className="mt-2 text-sm text-gray-700 line-clamp-3">{group.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {group.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">{t}</span>
            ))}
            <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">{group.spots} spots</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="text-sm text-gray-500">{group.schedule}</div>
          <div className="flex gap-2">
            <button
              onClick={() => { setSelectedGroup(group); setView("group"); }}
              className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm"
            >
              Ver
            </button>
            <button
              onClick={() => { setSelectedGroup(group); setView("apply"); }}
              className="px-3 py-1 rounded-md border border-indigo-200 text-indigo-700 text-sm"
            >
              Aplicar
            </button>
          </div>
        </div>
      </div>
    );
  }

  function Landing() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col">
        <header className="max-w-4xl mx-auto w-full p-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">StudyMatch</h1>
          <div className="flex gap-2">
            <button onClick={() => setView("login")} className="text-sm">Iniciar Sesión</button>
            <button onClick={() => setView("register")} className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">Registrar</button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto w-full p-6 flex-1 flex flex-col gap-6">
          <section className="bg-white rounded-2xl p-6 shadow-md flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Conecta, colabora y encuentra tu grupo de estudio ideal.</h2>
              <p className="mt-2 text-gray-600">Find Study Groups - Join existing groups based on your courses and interests.</p>
              <div className="mt-4 flex gap-3">
                <button onClick={() => setView("discover")} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Find Study Groups</button>
                <button onClick={() => setView("partners")} className="px-4 py-2 border rounded-md">Find Study Partners</button>
              </div>
            </div>
            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">ILLUSTRATION</div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow">Mini feature card 1</div>
            <div className="bg-white p-4 rounded-xl shadow">Mini feature card 2</div>
          </section>
        </main>

        <footer className="max-w-4xl mx-auto w-full p-6 text-center text-sm text-gray-500">© StudyMatch</footer>
      </div>
    );
  }

  function Auth({ mode = "login" }) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">{mode === "login" ? "Inicia Sesión" : "Crear Cuenta"}</h2>
          <p className="text-sm text-gray-500 mb-4">{mode === "login" ? "¿Ya tienes una cuenta? Inicia Sesión" : "Registrar usuario"}</p>
          <form className="flex flex-col gap-3">
            {mode === "register" && (
              <input className="border p-2 rounded-md" placeholder="Nombre completo" />
            )}
            <input className="border p-2 rounded-md" placeholder="Correo electrónico" />
            <input className="border p-2 rounded-md" placeholder="Contraseña" type="password" />
            {mode === "register" && <input className="border p-2 rounded-md" placeholder="Confirmar contraseña" type="password" />}
            <button type="button" onClick={() => setView("landing")} className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md">{mode === "login" ? "Iniciar Sesión" : "Registrar"}</button>
          </form>
        </div>
      </div>
    );
  }

  function Discover() {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Encuentra tu grupo de trabajo</h2>
            <div className="flex gap-2">
              <button onClick={() => setView("create")} className="px-3 py-1 bg-green-600 text-white rounded-md">Crear Grupo</button>
              <button onClick={() => setView("profile")} className="px-3 py-1 border rounded-md">Perfil</button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {mockGroups.map((g) => (
              <Card key={g.id} group={g} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  function GroupView({ group }) {
    if (!group) return null;
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-48 h-48 bg-gray-100 rounded-lg">Img</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{group.title}</h3>
                <p className="text-sm text-gray-600">{group.course}</p>
                <p className="mt-3 text-gray-700">{group.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button onClick={() => setView("chat")} className="px-3 py-1 bg-indigo-600 text-white rounded-md">Enviar Mensaje</button>
                  <button onClick={() => setView("apply")} className="px-3 py-1 border rounded-md">Aplicar al Grupo</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button onClick={() => setView("discover")} className="px-3 py-1 border rounded-md">Volver</button>
          </div>
        </div>
      </div>
    );
  }

  function CreateGroup() {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="w-full max-w-xl bg-white rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-3">Crea un grupo para tu próximo proyecto</h3>
          <form className="flex flex-col gap-3">
            <input className="border p-2 rounded-md" placeholder="Nombre del grupo" />
            <input className="border p-2 rounded-md" placeholder="Asignatura" />
            <textarea className="border p-2 rounded-md" placeholder="Descripción" />
            <input className="border p-2 rounded-md" placeholder="Tecnologías / Habilidades (separadas por coma)" />
            <div className="flex items-center gap-2">
              <label className="text-sm">Máximo de miembros</label>
              <input type="number" defaultValue={4} className="border p-2 rounded-md w-20" />
            </div>
            <div className="flex gap-2 mt-3">
              <button onClick={() => setView("discover")} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Crear Grupo</button>
              <button onClick={() => setView("discover")} className="px-4 py-2 border rounded-md">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  function Profile() {
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
            <button onClick={() => setView("discover")} className="px-3 py-1 border rounded-md">Explorar</button>
          </div>
        </div>
      </div>
    );
  }

  function Chat() {
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

  function ApplyFlow() {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow text-center">
          <h3 className="text-lg font-semibold">¡Hiciste un match!</h3>
          <p className="text-sm text-gray-600 mt-2">Tú e Isabella Rossi se unieron para conquistar el próximo proyecto.</p>
          <div className="mt-4 flex gap-2 justify-center">
            <button onClick={() => setView("chat")} className="px-3 py-1 bg-indigo-600 text-white rounded-md">Ir al chat</button>
            <button onClick={() => setView("discover")} className="px-3 py-1 border rounded-md">Seguir explorando</button>
          </div>
        </div>
      </div>
    );
  }

  // Simple router
  let content = null;
  switch (view) {
    case "landing":
      content = <Landing />;
      break;
    case "login":
      content = <Auth mode="login" />;
      break;
    case "register":
      content = <Auth mode="register" />;
      break;
    case "discover":
      content = <Discover />;
      break;
    case "group":
      content = <GroupView group={selectedGroup} />;
      break;
    case "create":
      content = <CreateGroup />;
      break;
    case "profile":
      content = <Profile />;
      break;
    case "chat":
      content = <Chat />;
      break;
    case "apply":
      content = <ApplyFlow />;
      break;
    default:
      content = <Landing />;
  }

  return <div className="font-sans text-gray-800">{content}</div>;
}
