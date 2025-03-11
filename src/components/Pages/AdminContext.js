import React, { createContext, useState, useContext } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");

  
  const loginAsAdmin = (username, password) => {
    if (username === "admin" && password === "password123") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
    }
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  return (

    <AdminContext.Provider value={{ isAdmin, loginAsAdmin, logout }}>
      {children}
    </AdminContext.Provider>

  );
};

export const useAdmin = () => useContext(AdminContext);
