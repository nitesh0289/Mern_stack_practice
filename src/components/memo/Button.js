import React, { memo } from "react";

function Button(props) {
  const { text, handleClick } = props; //destructuring

  return (
    <button onClick={handleClick}>
      <p>{text}</p>
    </button>
  );
}

export default memo(Button);
