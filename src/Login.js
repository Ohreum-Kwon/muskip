import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="muskipLogo.png"
        alt="Muskip Logo"
      />
      <a href={accessUrl}>CONNECT TO SPOTIFY</a>
    </div>
  );
}

export default Login;
