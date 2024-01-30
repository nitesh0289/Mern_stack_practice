import React, { useContext } from "react";

import { CollegeContext, UserNameContext } from "../app";

function ComponentD() {
  const username = useContext(UserNameContext);
  const college = useContext(CollegeContext);

  return (
    <main style={{ border: "1px solid blue" }}>
      <h2>Component D</h2>
      {/* username */}
      <h3>
        {username} - {college}
      </h3>
      ;
    </main>
  );
}

export default ComponentD;
