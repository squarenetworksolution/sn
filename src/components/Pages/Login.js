import React, { useState } from "react";
import { useAdmin } from "./AdminContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginAsAdmin } = useAdmin();
  const navigate = useNavigate ();

  const handleLogin = () => {
    loginAsAdmin(username,password);
    navigate("/upload");
  };

  return (
    
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Admin Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
  
};

export default Login;
