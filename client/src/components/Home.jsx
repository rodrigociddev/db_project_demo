import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  const [accounts, setAccounts] = useState([]);
  // const navigate = useNavigate;
  // useEffect(() => {
  //   const fetchAllBooks = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8800/account");
  //       setAccounts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllBooks();
  // }, []);
  return (
    <div>
      <div className="home_container">
        <h1>Welcome! Please Register or Login to view your info!</h1>
        <Link className="home_button" to="/register">
          Register
        </Link>
        <Link className="home_button" to="/login">Log In</Link>
        <Link className="home_button" to="/update">Update Account</Link>
        <Link className="home_button" to="/delete">Delete Account</Link>
      </div>
      {accounts.map((account) => (
        <div>
          {account.account_id}
          {account.username}
        </div>
      ))}
    </div>
  );
}
