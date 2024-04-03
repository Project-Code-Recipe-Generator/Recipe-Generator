import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="box">
        <label for="inputBox">Username:</label>
        <input type="text" id="inputBox" name="inputBox" />
        <label for="inputBox">Password:</label>
        <input type="text" id="inputBox" name="inputBox" />
        <button className="button">Log In</button>
      </div>
    </div>
  );
};

export default Login;
