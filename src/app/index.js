import styles from "./styles.module.scss";
import React, { useReducer, useState } from "react";

import Home from "../pages/Home";

//create a context api
export const UserNameContext = React.createContext();
export const CollegeContext = React.createContext();

export const CountContext = React.createContext();

const initialState = {
  count: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
    case "decreament":
      return { ...state, count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  //username='Prince Kumar'
  const [username, setUsername] = useState("Prince Kumar");
  const [college, setCollege] = useState("LPU");

  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div className="App">
      <UserNameContext.Provider value={username}>
        <CollegeContext.Provider value={college}>
          <CountContext.Provider value={{ data: state, countDispatch: dispatch }}>
            <Home />
          </CountContext.Provider>
        </CollegeContext.Provider>
      </UserNameContext.Provider>
    </div>
  );
}

export default App;
