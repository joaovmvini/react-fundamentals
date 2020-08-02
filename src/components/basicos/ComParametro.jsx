import React from "react";

export default function (props) {
  const status = props.nota >= 7 ? "aprovado" : "recuperação";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>
        {props.aluno} tem nota {props.nota}, status: {status}
      </h3>
    </div>
  );
}
