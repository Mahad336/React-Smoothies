import React from "react";

export default function Smoothie(props) {
  console.log(props);
  return (
    <>
      <h4>{props.title}</h4>
      <h5>{props.snippet}</h5>
      <h6>{props.desc}</h6>
    </>
  );
}
