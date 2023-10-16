import { useNavigate } from "react-router-dom";
import "./NavBar.css";

interface Props {
  setAuth: (action: boolean) => void;
}

export const NavBar = ({ setAuth }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setAuth(false);
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
