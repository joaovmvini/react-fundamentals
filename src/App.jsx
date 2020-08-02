import "./App.css";
import React from "react";

import ComParametro from "./components/basicos/ComParametro.jsx";
import Fragmento from "./components/basicos/Fragmento.jsx";
import Primeiro from "./components/basicos/Primeiro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#05 - Componente com filhos" color="#00C8F8">
        <Familia />
      </Card>

      <Card titulo="#04 - Desafio aleatório" color="#FA6900">
        <Aleatorio min={5} max={10} />
        <Aleatorio min={5} max={10} />
        <Aleatorio min={5} max={10} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com parametro" color="#E8B71A">
        <ComParametro nota={9.3} aluno="João" />
      </Card>

      <Card titulo="#01 - Primeiro componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
