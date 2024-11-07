// src/components/UserDashboard.js
import React from "react";
import { useAuth } from "../Context/AuthContext"

const AdminDashboard = () => {
    const { logout } = useAuth();
  
    return (
      <div>
        <h1>Panel de Administrador</h1>
        <button onClick={logout}>Cerrar Sesión</button>
      </div>
    );
  };
  
export default AdminDashboard;