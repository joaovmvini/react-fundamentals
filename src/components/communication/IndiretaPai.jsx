import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false);

  function sendData(n, a, isNerd) {
    setName(n);
    setAge(a);
    setNerd(isNerd);
  }

  return (
    <div>
      <div>
        <span>{name} </span>
        <span>{age} </span>
        <span>{nerd ? "True" : "False"}</span>
      </div>
      <IndiretaFilho atClick={sendData}></IndiretaFilho>
    </div>
  );
};
