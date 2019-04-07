import React, { useState } from "react";

const Signin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h2>Signin</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(username);
          console.log(password);
        }}
      >
        <div>
          <label htmlFor="Username">Username </label>
          <input
            type="text"
            placeholder="Username"
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="Password">Password </label>
          <input
            type="password"
            placeholder="********"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
