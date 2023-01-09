import React, { useState, useEffect } from "react";
import Smoothie from "./smoothie";
import { Navigate } from "react-router-dom";
export default function AllSmoothies() {
  const [smoothie, setSmoothie] = useState({
    title: "",
    snippet: "",
    desc: "",
  });
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allRecipes", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: "mahad",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        <h1>All Smoothies</h1>
        {result.map((e) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href = "/allRecipes/" + e._id;
                e.style.cursor = "pointer";
              }}
            >
              <Smoothie
                desc={e?.body}
                title={e?.title}
                snippet={e?.snippet}
              ></Smoothie>
            </div>
          );
        })}
      </div>
    </>
  );
}
