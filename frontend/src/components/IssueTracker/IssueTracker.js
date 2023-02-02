import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row } from "reactstrap";

function IssueTracker({ children, title }) {
  const [userRoll, setUserRoll] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      return
    } else {
      if (userInfo.isAdmin === true) {
        setUserRoll("Administrator");
      } else if (userInfo.isDev === true) {
        setUserRoll("Developer");
      } else {
        return;
      }
    }
  }, [userInfo]);

  return (
    <Row>
      <div>
        {title && (
          <>
            <h1 className="heading">{title}</h1>
            <div className="brand">{userRoll}</div>
            <hr />
          </>
        )}
        {children}
      </div>
    </Row>
  );
}

export default IssueTracker;
