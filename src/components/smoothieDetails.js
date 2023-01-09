import React, { useState, useEffect } from "react";
import Smoothie from "./smoothie";
export default function SmoothieDetails() {
  const [smoothie, setSmoothie] = useState({
    title: "",
    snippet: "",
    desc: "",
  });
  const [result, setResult] = useState([]);
  let url = window.location.href;
  let id = url.split("/")[4];
  console.log(id);
  useEffect(() => {
    fetch("http://localhost:5000/allRecipes/" + id, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: "okay",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <>
      <div>
        <h1>Smoothie Details </h1>
        <div>
          <Smoothie
            desc={result?.body}
            title={result?.title}
            snippet={result?.snippet}
          ></Smoothie>
        </div>
        <br></br>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              window.location.href = window.location.href + "/edit";
            }}
          >
            Edit
          </button>
        </div>
        <br></br>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
