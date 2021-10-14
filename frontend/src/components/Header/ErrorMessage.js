import React from "react";
import { Alert } from "reactstrap";

const ErrorMessage = ({ color = "info", children }) => {
  return (
    <div>
      <Alert color={color}>
        <strong>{children}</strong>
      </Alert>
    </div>
  );
};

export default ErrorMessage;
