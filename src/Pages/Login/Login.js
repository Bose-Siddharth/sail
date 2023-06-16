import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    fetch("http://192.168.90.71:3001/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          navigate("/");
        } else {
          alert("Invalid Credentials");
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
      <div>
        <img
          src="./assets/iemathree.png"
          alt="logo"
          className="h-auto mt-6 mb-14 mr-52"
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
          <a href="/signup"> Sign Up</a>
        </div>
      </div>
      <div>
        <img src="./assets/sailtwoo.png" alt="" className="h-auto mt-12 mb-14 ml-52" />
      </div>
    </div>
  );
};

export default LoginPage;
