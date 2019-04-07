import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import Error from "./Error";

const SIGNIN_USER = gql`
  mutation($data: SigninInput!) {
    signin(data: $data) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

const Signin = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e, signin) => {
    e.preventDefault();
    if (username === "" || password === "") return;
    const { data } = await signin();
    localStorage.setItem("token", data.signin.token);
    setUsername("");
    setPassword("");
    props.history.push("/blog");
  };

  return (
    <div>
      <h2>Signin</h2>
      <Mutation
        mutation={SIGNIN_USER}
        variables={{ data: { username, password } }}
      >
        {(signin, { data, loading, error }) => {
          return (
            <form onSubmit={e => onSubmit(e, signin)}>
              <div>
                <label htmlFor="Username">Username </label>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={e => {
                    setUsername(e.target.value);
                  }}
                  value={username}
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
                  value={password}
                />
              </div>
              <div>
                <button type="submit" disabled={loading}>
                  Submit
                </button>
              </div>
              {error && <Error error={error} />}
            </form>
          );
        }}
      </Mutation>
    </div>
  );
};

export default withRouter(Signin);
