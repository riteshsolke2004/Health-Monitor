import React, { useState } from "react";
import "./Login.css";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  return (
    <div className="loginsignup">
      <div className="loginsignup-wrapper">
        {/* Left Section */}
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

        {/* Right Section */}
        <div className="loginsignup-right">
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <div className="loginsignup-fields">
            {!isLogin && <input type="text" placeholder="Full Name" />}
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
          </div>
          <button>{isLogin ? "Login" : "Sign Up"}</button>
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
