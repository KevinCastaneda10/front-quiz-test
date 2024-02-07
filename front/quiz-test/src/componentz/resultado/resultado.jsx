import React from "react";
import "./resultado.css"
import { useNavigate } from "react-router-dom";

const Resultado = () => {
  const navigate = useNavigate();
  function seleccionar() {
    console.log("SE HIZO CLICK");
  }

  function navigateToQuiz() {
    navigate (".");
  }

  return (
    <header className="App-header" onClick={navigateToQuiz}>
      <div className="inicio-test">
        <div className="cuadro" onClick={seleccionar}></div>
      </div>
    </header>
  );
};

export default Resultado
