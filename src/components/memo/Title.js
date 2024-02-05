import React, { memo } from "react";

function Title(props) {
  const { title } = props;

  return <h2>{title}</h2>;
}

export default memo(Title);
