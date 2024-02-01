import React, { useReducer } from "react";

const initialState = {
  count: 0,
};
const initialState2 = {
  count: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
    case "decreament":
      return { ...state, count: state.count - 1 };
    case "increament5":
      return { ...state, count: state.count + 5 };
    case "decreament5":
      return { ...state, count: state.count - 5 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const count2Reducer = (state, action) => {
  switch (action.type) {
    case "increament10":
      return { ...state, count: state.count + 10 };
    case "decreament10":
      return { ...state, count: state.count - 10 };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const [state2, dispatch2] = useReducer(count2Reducer, initialState2);
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexDirection: "column" }}>
        <h1>Reducer - {state.count}</h1>
        <h3>Actions - </h3>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => dispatch({ type: "increament" })}>Increase</button>
          <button onClick={() => dispatch({ type: "decreament" })}>Decrease</button>
          <br />
          <button onClick={() => dispatch({ type: "increament5" })}>Increase 5</button>
          <button onClick={() => dispatch({ type: "decreament5" })}>Decrease 5</button>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
          <br />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexDirection: "column" }}>
        <h1>Reducer2 - {state2.count}</h1>
        <h3>Actions2 - </h3>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => dispatch2({ type: "increament10" })}>Increase 10</button>
          <button onClick={() => dispatch2({ type: "decreament10" })}>Decrease 10</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
