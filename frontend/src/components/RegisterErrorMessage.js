import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "reactstrap";

const RegisterErrorMessage = ({ color = "info", children }) => {
  const [visible, setVisible] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const timeId = setTimeout(() => {
      setVisible(false);
      localStorage.clear();
    }, 5000);
    return () => {
      clearTimeout(timeId);
    };
  }, [history]);

  if (!visible) {
    return null;
  }

  return (
    <div>
      <Alert
        className="col-sm-6 m-auto"
        style={{ textAlign: "center" }}
        color={color}
        isOpen={visible}
      >
        <strong>{children}</strong>
      </Alert>
    </div>
  );
};

export default RegisterErrorMessage;
