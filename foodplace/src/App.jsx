import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SingUp } from "./pages/SingUp";

import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          </Route>
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
