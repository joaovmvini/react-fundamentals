import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho text="Filho 1" num={20} bool={true} />
      <DiretaFilho text="Filho 2" num={10} bool={true} />
    </div>
  );
};
