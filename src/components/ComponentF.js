import React from "react";

import { UserNameContext } from "../app";

function ComponentF() {
  return (
    <main style={{ border: "1px solid yellow" }}>
      <h2>Component F</h2>
      {/* username */}
      <UserNameContext.Consumer>
        {(username) => {
          return <h3>UserName: {username}</h3>;
        }}
      </UserNameContext.Consumer>
    </main>
  );
}

export default ComponentF;
