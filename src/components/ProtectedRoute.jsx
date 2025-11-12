import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, login }) {
  if (!login) {
    return <Navigate to="/login" />;
  }

  return children;
}
