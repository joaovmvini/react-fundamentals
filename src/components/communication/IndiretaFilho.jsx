import React from "react";

export default (props) => {
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(e) =>
          props.atClick("João", parseInt(Math.random() * 20) + 50, false)
        }
      >
        Send info about dad
      </button>
    </div>
  );
};
