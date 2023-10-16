// import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { useState } from "react";
import { NavBar } from "./pages/NavBar";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { Dashboard } from "./pages/Dashboard";
import { Personajes } from "./pages/Personajes";
import { Planetas } from "./pages/Planetas";
import { Especies } from "./pages/Especies";
import { Peliculas } from "./pages/Peliculas";

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <>
      <BrowserRouter>
        {/* <PrimeReactProvider> */}
          <div>
            {auth && <NavBar setAuth={setAuth} />}
            <Routes>
              <Route path="login/*" element={<Login setAuth={setAuth} />} />
              <Route path="*" element={<Navigate to={"/login"} />} />
              <Route path="dashboard" element={<ProtectedRoute auth={auth} />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="personajes" element={<ProtectedRoute auth={auth} />}>
                <Route path="/personajes" element={<Personajes />} />
              </Route>
              <Route path="planetas" element={<ProtectedRoute auth={auth} />}>
                <Route path="/planetas" element={<Planetas />} />
              </Route>
              <Route path="especies" element={<ProtectedRoute auth={auth} />}>
                <Route path="/especies" element={<Especies />} />
              </Route>
              <Route path="peliculas" element={<ProtectedRoute auth={auth} />}>
                <Route path="/peliculas" element={<Peliculas />} />
              </Route>
            </Routes>
          </div>
        {/* </PrimeReactProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
