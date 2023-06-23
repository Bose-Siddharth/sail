import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import popMessage from "../../Utils/PopUp";
import "./login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // Perform authentication logic here (e.g., validate credentials)
    // For simplicity, we'll just redirect to another page after 2 seconds
    e.preventDefault();

    const user = {
      username,
      password,
    };

    // use fetch to send user data to backend and get response back from backend to frontend to check if user exists or not and if user exists then redirect to home page
    fetch("http://localhost:3001/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          navigate("/home");
        } else {
          popMessage("Try Again", "error" ,data.message); // popMessage(title, icon, massage)
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Server is down");
      });

    // if no response from backend then display alert message to user that server is down

    // setTimeout(() => {
    //   navigate("/");
    // }, 2000);
  };

  return (
    <div className="login-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
        }}
      >
        <img
          src="./assets/iemathree.png"
          alt="logo"
          className="h-auto"
        />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className=" mt-5">
          Login
        </button>
        <div className=" mt-5 text-center text-blue-700 mb-5">
          <div className=" text-white">
            <a href="/forgot-password">Forgot Password?</a>
            <br />
            or
          </div>
          <a href="/sign-up"> Sign Up</a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
        }}
      >
        <img src="./assets/sailtwoo.png" alt="" className="h-auto" />
      </div>
    </div>
  );
};

export default LoginPage;
