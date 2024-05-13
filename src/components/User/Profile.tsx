import React from "react";
import { useAuth } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    auth.logout && auth.logout();
    navigate("/Home");
  };
  return (
    <div>
      Welcome {auth.user} <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Profile;
