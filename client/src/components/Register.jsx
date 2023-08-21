import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.scss";

export default function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      console.log(res);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className="register">
      <form action="" onSubmit={handleSubmit}></form>
      <h1>Create Account:</h1>
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
        Email:{" "}
        <input
          type="text"
          onChange={handleChange}
          placeholder="Email"
          autoComplete="off"
          name="email"
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
      {error && <p style={{ color: `red` }}>{error}</p>}
      <button onClick={handleSubmit}>Submit</button>
      <div className="home_button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
