import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.scss";
//import { AuthContext } from "../context/authContext";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [response, setRes] = useState({
    username: "",
    email:"",
    id:"",
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        inputs
      );
      console.log(res);
      response = res.data
      setLoggedIn(true);
    } catch (err) {
      setError(err.response);
    }
  };
  return (
    <div className="register">
      <div className="home_button">
        <Link to="/">Home</Link>
      </div>
      {!loggedIn && (
        <div>
          <h1>Log In:</h1>
          <div>
            Username*:{" "}
            <input
              type="text"
              onChange={handleChange}
              placeholder="Username"
              name="username"
              autoComplete="off"
              required
            />
          </div>
          <div>
            Password*:{" "}
            <input
              type="password"
              onChange={handleChange}
              placeholder="Password"
              name="password"
              autoComplete="off"
              required
            />
          </div>
          <br />
          {loggedIn && (
            <div>
              <p>{response.username}</p> <h1> WTF </h1>
            </div>
          )}

          {error && <p style={{ color: `red` }}>{error}</p>}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}
