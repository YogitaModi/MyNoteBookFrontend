import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const [signupCredentials, setSignupCredendials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const onChange = (e) => {
    setSignupCredendials({
      ...signupCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = signupCredentials;
    if (password === cpassword) {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const json = await response.json();
      if (json.success) {
        localStorage.setItem("auth-token", json.authToken);
        navigate("/");
        props.showalert("account created successfuly", "success");
      } else {
        props.showalert("Account exixts already ", "danger");
      }
    } else {
      props.showalert("Password and confirm password must be same", "danger");
    }
  };
  return (
    <div>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={signupCredentials.username}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={signupCredentials.email}
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
            value={signupCredentials.password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={signupCredentials.cpassword}
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
