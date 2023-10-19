import React, { lazy } from "react";
import { Outlet, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";


const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const Register = lazy(() => import("./pages/Register"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));

interface User {
  token: string;
}
/* Fonction pour protéger certaines routes */
function Layout() {
  const user: User | null = useSelector((state) => state.user);
  const location = window.location.pathname;

  return user && user.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`w-full min-h-[100vh] ${theme}`}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
      </Routes>
    </div>
  );
}

export default App;

