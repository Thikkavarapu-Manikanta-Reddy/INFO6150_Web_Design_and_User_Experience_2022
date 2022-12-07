import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import LazyLoader from "./components/LazyLoader/LazyLoader";

function App() {
  const Home = lazy(() => import("./components/Home/Home"));
  const Login = lazy(() => import("./components/Login/Login"));
  const Signup = lazy(() => import("./components/Signup/Signup"));
  const NotFound = lazy(() => import("./components/NotFound/NotFound"));
  const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
  const Register = lazy(() => import("./components/RegisterEmail/Register"));
  const ChildRoutes = lazy(() =>
    import("./components/ChildRoutes/ChildRoutes")
  );

  return (
    <Suspense fallback={LazyLoader()}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registerEmail" element={<Register />} />
        <Route
          exact
          path="/redirect"
          element={<Navigate replace to="/signup" />}
        />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/dashboard"
          element={
            <ChildRoutes>
              <NotFound />
            </ChildRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
