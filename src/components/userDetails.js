import React, { useState, useEffect } from "react";
export default function UserDetails() {
  const [state, setState] = useState({
    userData: "",
  });
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) return (window.location.href = "./");

    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error === "notfound") window.location.href = "./";
        if (data.data) setState({ userData: data.data });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        Name<h1>{state.userData.fname}</h1>
        Email <h1>{state.userData.email}</h1>
        <button
          onClick={() => {
            window.location.assign("./");
            localStorage.clear();
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}
