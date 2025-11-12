import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile({ user, handleUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow text-center">
          <h3 className="text-lg font-semibold">No has iniciado sesión</h3>
          <p className="text-sm text-gray-600 mt-2">Inicia sesión para ver tu perfil.</p>
          <div className="mt-4 flex gap-2 justify-center">
            <Link to="/login" className="px-3 py-1 bg-indigo-600 text-white rounded-md">Iniciar Sesión</Link>
            <Link to="/register" className="px-3 py-1 border rounded-md">Registrar</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      handleUpdateUser(editedUser);
    }
  };

  const handleScheduleChange = (index, field, value) => {
    const newSchedules = [...editedUser.schedules];
    newSchedules[index][field] = value;
    setEditedUser({ ...editedUser, schedules: newSchedules });
  };

  const handleAddSchedule = () => {
    setEditedUser({ ...editedUser, schedules: [...editedUser.schedules, { day: "", time: "" }] });
  };

  const handleRemoveSchedule = (index) => {
    const newSchedules = editedUser.schedules.filter((_, i) => i !== index);
    setEditedUser({ ...editedUser, schedules: newSchedules });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">Img</div>
          <div>
            {isEditing ? (
              <>
                <input
                  className="border p-1 rounded-md mb-1"
                  value={editedUser.name}
                  onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                />
                <input
                  className="border p-1 rounded-md mb-1"
                  value={editedUser.degree}
                  onChange={(e) => setEditedUser({ ...editedUser, degree: e.target.value })}
                />
                <input
                  className="border p-1 rounded-md"
                  value={editedUser.uni}
                  onChange={(e) => setEditedUser({ ...editedUser, uni: e.target.value })}
                />
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.degree}</p>
                <p className="text-sm text-gray-600">{user.uni}</p>
              </>
            )}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 bg-gray-50 rounded-lg">Intereses</div>
          <div className="p-3 bg-gray-50 rounded-lg">Reputación</div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold mb-2">Mis Horarios Disponibles</h4>
          {isEditing ? (
            <div>
              {editedUser.schedules.map((schedule, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    className="border p-1 rounded-md flex-1"
                    placeholder="Día"
                    value={schedule.day}
                    onChange={(e) => handleScheduleChange(index, "day", e.target.value)}
                  />
                  <input
                    className="border p-1 rounded-md flex-1"
                    placeholder="Hora"
                    value={schedule.time}
                    onChange={(e) => handleScheduleChange(index, "time", e.target.value)}
                  />
                  <button onClick={() => handleRemoveSchedule(index)} className="px-2 py-1 bg-red-500 text-white rounded-md">X</button>
                </div>
              ))}
              <button onClick={handleAddSchedule} className="px-3 py-1 bg-green-600 text-white rounded-md mt-2">Añadir Horario</button>
            </div>
          ) : (
            editedUser.schedules.length > 0 ? (
              <ul>
                {editedUser.schedules.map((schedule, index) => (
                  <li key={index} className="text-sm text-gray-700">{schedule.day}: {schedule.time}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No hay horarios disponibles.</p>
            )
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={handleEditToggle} className="px-3 py-1 bg-indigo-600 text-white rounded-md">
            {isEditing ? "Guardar Cambios" : "Editar Perfil"}
          </button>
          <Link to="/discover" className="px-3 py-1 border rounded-md">Explorar</Link>
        </div>
      </div>
    </div>
  );
}
