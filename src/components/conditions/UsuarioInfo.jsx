import React from "react";
import If, { Else } from "./If";

export default (props) => {
  const user = props.user || {};
  return (
    <div>
      <If test={user && user.name}>
        Welcome, <strong>{user.name}</strong>
        <Else>
          Welcome, <strong>Friend!</strong>
        </Else>
      </If>
    </div>
  );
};
