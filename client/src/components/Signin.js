import React from "react";

const Signin = () => (
  <div>
    <h2>Signin</h2>
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log("submited");
      }}
    >
      <div>
        <label htmlFor="Username">Username </label>
        <input type="text" placeholder="Username" />
      </div>
      <div>
        <label htmlFor="Password">Password </label>
        <input type="password" placeholder="********" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);

export default Signin;
