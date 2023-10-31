import React from "react";
import Login from "../components/Login.jsx";
import Navbar from "../components/Navbar.jsx";

/* signIn -> log in

  signUp -> register */

export default function AuthPage() {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}
