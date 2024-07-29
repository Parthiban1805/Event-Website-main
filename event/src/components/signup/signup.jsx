import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
const port = 5000;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Trying to sign in...");

    let valid = true;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return;

    try {
      const response = await fetch(`https://event-website-main.onrender.com/admin-login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (response.ok) {
          console.log("Signin successful:");
          navigate("/admin");
        } else {
          setLoginError(data.message || "Signin failed");
          console.error("Signin failed:",);
        }
      } else {
        const text = await response.text();
        setLoginError("Unexpected response format");
        console.error("Unexpected response format:", text);
      }
    } catch (error) {
      setLoginError("Error connecting to server");
      console.error("Error:", error);
    }
  };

  const validateEmail = (value) => {
    if (!value) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="admin-loginpage-container">
      <div className="admin-loginpage">
        <div className="admin-login-container">
          <h1>Login here</h1>
          <form className="login-form-container" onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
            {emailError && <div className="error">{emailError}</div>}
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
            />
            {passwordError && <div className="error">{passwordError}</div>}
            {loginError && <div className="error">{loginError}</div>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
