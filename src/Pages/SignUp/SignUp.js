import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link component for internal navigation
import "./signup.css";
import popMessage from "../../Utils/PopUp";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    const user = {
      firstName,
      lastName,
      username,
      phoneNumber,
      address,
      employeeId,
      password,
    };

    fetch("http://192.168.90.71:3001/sign-up", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(() => {
        navigate("/sign-in");
      })
      .catch((error) => {
        popMessage("try agian","error".error.message);
      });

  };

  return (
    <div className="signup-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "35%",
        }}
      >
        <img src="./assets/iemathree.png" alt="logo"/>
      </div>
      <div className="signup-form">
        <h2 className="mt-9 mb-8">Create Account</h2>

        <div className="form-part-1 gap-3">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-part-2">
        
          <input
            type="text"
            id="employeeId"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        
        
          <input
            type="email"
            id="username"
            placeholder="Email"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        
        
          <input
            type="text"
            id="phoneNumber"
            placeholder="Phone"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
          />
        
        
          <input
            type="text"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        
        </div>
        <div className="form-part-3 gap-3">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="btn-center mt-4">
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
        <div className="text-white mb-2 btn-center mt-7">
          <p>
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue-700">
              Login Instead!
            </Link>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "35%",
        }}
      >
        <img src="./assets/sailtwoo.png" alt="" />
      </div>
    </div>
  );
};

export default SignUpPage;
