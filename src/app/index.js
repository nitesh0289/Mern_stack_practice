import styles from "./styles.module.scss";
import React, { useState } from "react";

import Home from "../pages/Home";

//create a context api
export const UserNameContext = React.createContext();
export const CollegeContext = React.createContext();

function App() {
  //username='Prince Kumar'
  const [username, setUsername] = useState("Prince Kumar");
  const [college, setCollege] = useState("LPU");

  return (
    <div className="App">
      <UserNameContext.Provider value={username}>
        <CollegeContext.Provider value={college}>
          <Home />
        </CollegeContext.Provider>
      </UserNameContext.Provider>
    </div>
  );
}

export default App;
