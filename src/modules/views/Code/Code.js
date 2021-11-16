import React from "react";
import useCode from "./useCode";

const Code = () => {
  const { code } = useCode();
  return <div>{code}</div>;
};

export default Code;
