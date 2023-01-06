import React, { useState } from "react";
export default function SignUp() {
  //error handling
  const [error, setError] = useState("");

  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = state;
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status.code) return setError("User Already Exists");
        if (data.status && data.status != "ok")
          return setError(data.status.message.substring(34));
        if (data.status == "ok") {
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userData";
        }
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) =>
              setState((prev) => {
                return { ...state, fname: e.target.value };
              })
            }
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => {
              setState({ ...state, lname: e.target.value });
            }}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </div>
        <div>
          <label>{error}</label>
        </div>
        <br></br>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login-user">sign in?</a>
        </p>
      </form>
    </>
  );
}
