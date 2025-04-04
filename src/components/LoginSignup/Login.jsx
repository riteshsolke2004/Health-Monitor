import React, { useState } from "react";
import "./Login.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
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
        alert(result.message);
        console.log("User:", result.user);
      } else {
        alert(result.detail);
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-wrapper">
        <div className="loginsignup-left">
          <h2>{isLogin ? "Welcome Back!" : "Join Us Today!"}</h2>
          <p>
            {isLogin
              ? "Login to access your account and explore health insights."
              : "Sign up to manage your health and get personalized recommendations!"}
          </p>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>

        <div className="loginsignup-right">
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <div className="loginsignup-fields">
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
          </div>

          <button onClick={isLogin ? handleLogin : handleSignup}>
            {isLogin ? "Login" : "Sign Up"}
          </button>

          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
