import React from "react";
import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinner children="" color="secondary"></Spinner>
    </div>
  );
};

export default Loading;
