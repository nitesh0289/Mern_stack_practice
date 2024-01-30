import React from "react";

import { CollegeContext, UserNameContext } from "../app";

function ComponentA() {
  return (
    <main style={{ border: "1px solid red" }}>
      <h2>Component A</h2>
      {/* username */}
      <UserNameContext.Consumer>
        {(username) => {
          return (
            <CollegeContext.Consumer>
              {(college) => {
                return (
                  <h3>
                    {username} - {college}
                  </h3>
                );
              }}
            </CollegeContext.Consumer>
          );
        }}
      </UserNameContext.Consumer>
    </main>
  );
}

export default ComponentA;
