import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";

const LoginErrorMessage = ({ color = "info", children }) => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeId = setTimeout(() => {
      setVisible(false);
      navigate("/");
      localStorage.clear();
    }, 5000);
    return () => {
      clearTimeout(timeId);
    };
  }, [navigate]);

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

export default LoginErrorMessage;
