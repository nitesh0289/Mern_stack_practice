import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, flexDirection: "column" }}>
      <h1>Reducer - {count}</h1>
      <h3>Actions - </h3>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => dispatch("increament")}>Increase</button>
        <button onClick={() => dispatch("decreament")}>Decrease</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
