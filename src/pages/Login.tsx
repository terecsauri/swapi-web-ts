import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

interface Props {
  setAuth: (action: boolean) => void;
}

export const Login = ({ setAuth }: Props) => {
  const [datosUsername, setDatosUsername] = useState<string>("");
  const [datosPassword, setDatosPassword] = useState<string>("");

  const [show, setShow] = useState<boolean>(false);

  const correctUsername: string = "amidala";
  const correctPassword: string = "skywalker";

  const handleClick = () => setShow(!show);

  const hanldeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "username") setDatosUsername(value);
    if (name === "password") setDatosPassword(value);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      datosUsername === correctUsername &&
      datosPassword === correctPassword
    ) {
      navigate("/dashboard");
      setAuth(true);
    }
  };

  return (
    <div className="todo">
      <div className="stack1">
        <div className="caja">
          <h2>Datos de login:</h2>
          <h3>Usuario: amidala</h3>
          <h3>Contraseña: skywalker</h3>
        </div>
        <div className="login-caja">
          <div>
            <div>
              <form>
                <label>Usuario</label>
                <input
                  id="username"
                  name="username"
                  onChange={(event) => {
                    hanldeChange(event);
                  }}
                />
              </form>
              <form>
                <label htmlFor="password">Contraseña</label>
                <fieldset>
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    name="password"
                    onChange={(event) => {
                      hanldeChange(event);
                    }}
                  />
                  <button onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </button>
                </fieldset>
              </form>
            </div>
            <div className="stack2">
              <button onClick={handleSubmit}>Entrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
