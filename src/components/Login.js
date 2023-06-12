import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  let navigate = useNavigate();
  const [loginCredential, setLoginCredential] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: loginCredential.email,
        password: loginCredential.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      console.log(json.authToken);
      localStorage.setItem("auth-token", json.authToken);

      props.showalert("logged in successfully", "success");
      navigate("/");
    } else {
      props.showalert("provide correct credentials", "danger");
    }

    console.log(json);
  };
  const onChange = (e) => {
    setLoginCredential({ ...loginCredential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={loginCredential.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={loginCredential.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
