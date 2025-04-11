import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        // Store user data or token in localStorage for persistent auth
        localStorage.setItem("authToken", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        
        alert(result.message);
        // Redirect to dashboard after successful signup
        navigate("/");
      } else {
        alert(result.detail);
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        // Store user data or token in localStorage for persistent auth
        localStorage.setItem("authToken", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        
        alert(result.message);
        console.log("User:", result.user);
        // Redirect to dashboard after successful login
        navigate("/");
      } else {
        alert(result.detail);
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>{isLogin ? "Welcome Back!" : "Join Us Today!"}</h2>
          <p>
            {isLogin
              ? "Login to access your account and explore health insights."
              : "Sign up to manage your health and get personalized recommendations!"}
          </p>
          <button
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h3>{isLogin ? "Login" : "Sign Up"}</h3>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          
          {isLogin ? (
            <p className="alternative-option">
              Don't have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          ) : (
            <p className="alternative-option">
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;