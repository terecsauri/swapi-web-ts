// import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { useMemo, useState } from "react";
import { UserContext, UserContextType } from "./pages/UserContext";
import { NavBar } from "./pages/NavBar";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { Dashboard } from "./pages/Dashboard";
import { Personajes } from "./pages/Personajes";

function App() {
  const [user, setUser] = useState<UserContextType | null>(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <BrowserRouter>
        {/* <PrimeReactProvider> */}
        <UserContext.Provider value={value}>
          <div>
            {user && <NavBar />}
            <Routes>
              <Route path="login/*" element={<Login setUser={setUser} />} />
              <Route path="*" element={<Navigate to={"/login"} />} />
              <Route path="dashboard" element={<ProtectedRoute user={user} />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="personajes" element={<ProtectedRoute user={user} />}>
                <Route path="/personajes" element={<Personajes />} />
              </Route>
            </Routes>
          </div>
        </UserContext.Provider>
        {/* </PrimeReactProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
