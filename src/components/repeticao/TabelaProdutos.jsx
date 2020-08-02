import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

import React from "react";

export default (props) => {
  const productHtml = produtos.map((produto, i) => {
    return (
      <tr className={i % 2 === 0 ? "Par" : "Impar"} key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.name}</td>
        <td>{produto.price}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table border="1">
        <thead>
          <tr>
            <td>
              <strong>ID</strong>
            </td>
            <td>
              <strong>Nome</strong>
            </td>
            <td>
              <strong>Preço</strong>
            </td>
          </tr>
        </thead>
        <tbody>{productHtml}</tbody>
      </table>
    </div>
  );
};
