import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./NavBar.css";

export const NavBar: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setUser(false);
    navigate("/login");
  };

  const navigateTo = (route: string) => {
    navigate(route);
  };

  return (
    <div className="toda">
      <div onClick={handleClick}>
        Logout
      </div>
      <div onClick={() => navigateTo("/dashboard")}>
        Dashboard
      </div>
      <div onClick={() => navigateTo("/personajes")}>
        Personajes
      </div>
      <div onClick={() => navigateTo("/planetas")}>
        Planetas
      </div>
      <div onClick={() => navigateTo("/especies")}>
        Especies
      </div>
      <div onClick={() => navigateTo("/peliculas")}>
        Películas
      </div>
    </div>
  );
};
