import "./App.css";
import React from "react";

import ComParametro from "./components/basicos/ComParametro.jsx";
import Fragmento from "./components/basicos/Fragmento.jsx";
import Primeiro from "./components/basicos/Primeiro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/conditions/ParOuImpar";
import UsuarioInfo from "./components/conditions/UsuarioInfo";
import DiretaPai from "./components/communication/DiretaPai";
import IndiretaPai from "./components/communication/IndiretaPai";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10} />
      </Card>

      <Card titulo="#11 - Componente Controlado" color="#E45F56">
        <Input />
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#982398">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982398">
        <ParOuImpar numero={20} />
        <UsuarioInfo user={{ name: "Joao" }}></UsuarioInfo>
      </Card>

      <Card titulo="#07 - Tabela de Produtos" color="lightblue">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Lista de Alunos" color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com filhos" color="#00C8F8">
        <Familia lastName="Fernandes">
          <FamiliaMembro name="João" />
          <FamiliaMembro name="Pedro" />
          <FamiliaMembro name="Marcus" />
        </Familia>
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
