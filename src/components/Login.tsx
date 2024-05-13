import React, { useState } from "react";
import { AuthContextType, useAuth } from "../utils/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth: AuthContextType = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const login = () => {
    auth.login && auth.login(user);
    const redirectPath = location.state.path ? location.state.path : "/";
    console.log("redirectpath = ", redirectPath);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label>
        Username
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
