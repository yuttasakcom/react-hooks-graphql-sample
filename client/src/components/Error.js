import React from "react";

const Error = ({ error }) => {
  const data = error.graphQLErrors.map(({ data }) => data[0]);
  return data.map((d, i) => <div key={i}>{d.message}</div>);
};

export default Error;
