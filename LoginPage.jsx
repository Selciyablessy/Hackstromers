import React, { useState } from "react";
import "./LoginPage.css"; 
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({}); 
  const [formValid, setFormValid] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate fields
    const errors = {};
    if (!email.trim()) errors.email = "Email is required.";
    if (!password.trim()) errors.password = "Password is required.";

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      setFormValid(false);
      return;
    }

    // If valid, handle login logic
    console.log("Email:", email, "Password:", password);
    alert("Login functionality will be implemented soon!");
    setFormValid(true);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Health & Fitness Tracker</h2>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-required="true"
            />
            {!formValid && errorMessage.email && (
              <p className="error-message">{errorMessage.email}</p>
            )}
          </div>
          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              aria-required="true"
            />
            {!formValid && errorMessage.password && (
              <p className="error-message">{errorMessage.password}</p>
            )}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
