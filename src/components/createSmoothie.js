import React, { useState } from "react";

export default function CreateSmoothie(props) {
  const [details, setDetails] = useState({
    title: "",
    snippet: "",
    body: "",
    createdBy: "Mahad",
  });

  function handleSubmit(e) {
    const token = window.localStorage.getItem("token");
    console.log(token);
    e.preventDefault();
    const { title, snippet, body, createdBy } = details;
    fetch("http://localhost:5000/createSmoothie", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title,
        snippet,
        body,
        createdBy,
        token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Create Smoothie</h3>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            style={{ color: "black" }}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...details, title: e.target.value };
              })
            }
          />
        </div>
        <div className="mb-3">
          <label>Snippet</label>
          <input
            type="text"
            className="form-control"
            placeholder="Snippet"
            style={{ color: "black" }}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...details, snippet: e.target.value };
              })
            }
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={(e) =>
              setDetails((prev) => {
                return { ...details, body: e.target.value };
              })
            }
          />
        </div>
        <br></br>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
