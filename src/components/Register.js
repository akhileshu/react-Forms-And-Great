import React from "react";

export default function register(props) {
  return (
    <>
    <div>
    <form className="form container" onSubmit={props.submit}>
    <h1 className="mb-4 text-center" >Registration Form</h1>
    <div className="mb-3">
    <label  htmlFor="exampleInputPassword1" className="form-label">Name:</label>
    <input className="" type="text" required name="name" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
    <input className="" type="email" required name="email" />
   <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
    <input className="" type="password" required name="password" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Accept all terms and conditions</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    {/* <div>
      <form onSubmit={props.submit}>
      <h1>Registration Form</h1>
        <div>
          name:
          <input type="text" required name="name" />
        </div>
        <div>
          email:
          <input type="email" required name="email" />
        </div>
        <div>
          password:
          <input type="password" required name="password" />
        </div>
        <button type="submit">submit</button>
      </form>
    </div> */}
    </>
  );
}
