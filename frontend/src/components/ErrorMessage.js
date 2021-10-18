import React, { useState } from "react";
import { Alert } from "reactstrap";

//import "./Header/Header.css";
const ErrorMessage = ({ color = "info", children }) => {
  const [visible, setVisible] = useState(true);

  window.setTimeout(() => {
    setVisible(false);
  }, 15000);

  return (
    <div>
      <Alert color={color} isOpen={visible}>
        <strong>{children}</strong>
      </Alert>
    </div>
  );
};

export default ErrorMessage;
