import React from "react";

export default function greet(props) {
  return (
    <div className="form container">
      <h1  className="m-4"> 
      Thankyou {props.name}</h1>

      <div className="m-4">your Registration is successful</div>
      <div className="m-4">verification sent on {props.email}</div>
    </div>
  );
}
