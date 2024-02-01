import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SingUp } from "./pages/SingUp";
import { UserPanel } from "./pages/UserPanel";
import { Cart } from "./pages/Cart";

import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./router/PrivateRoute";

import { ToastContainer } from "react-toastify";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/user-panel" element={<UserPanel />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
