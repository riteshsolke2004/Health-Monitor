import React, { useState } from "react";
import "./Login.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("User logged in");
    } else {
      console.log("User signed up");
    }
  };

  return (
    <div className="login-signup-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleFormSubmit} className="form-container">
        {!isLogin && (
          <div>
            <label>Full Name:</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="submit-button">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          className="toggle-button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;
