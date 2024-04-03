import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="box">
        <label htmlFor="username" className="input-text">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Type here..."
          className="input-box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className="input-text">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Type here..."
          className="input-box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button">Log In</button>
      </div>
    </div>
  );
};

export default Login;
