import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (email === "admin@ainoc.com" && password === "admin123") {

      navigate("/dashboard");

    } else {

      alert("Invalid Email or Password");

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1 className="login-title">AI-NOC</h1>

        <p className="login-subtitle">
          AI Powered Network Operations Center
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

          </div>

          <button className="login-btn">

            Login

          </button>

        </form>

        <p className="footer-text">
          AI-NOC © 2024. All rights reserved.
        </p>

      </div>

    </div>

  );

}

export default Login;