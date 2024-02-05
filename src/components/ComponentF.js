import React, { useContext } from "react";

import { UserNameContext, CountContext } from "../app";

function ComponentF() {
  const { data, countDispatch } = useContext(CountContext);
  return (
    <main style={{ border: "1px solid yellow" }}>
      <h2>Component F - {data.count}</h2>
      <button onClick={() => countDispatch({ type: "increament" })}>Increase</button>
      <button onClick={() => countDispatch({ type: "decreament" })}>Decrease</button>
      {/* username */}
      {/* <UserNameContext.Consumer>
        {(username) => {
          return <h3>UserName: {username}</h3>;
        }}
      </UserNameContext.Consumer> */}
    </main>
  );
}

export default ComponentF;
