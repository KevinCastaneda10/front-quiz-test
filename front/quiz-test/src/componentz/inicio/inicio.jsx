import React from "react";
import "./inicio.css";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();
  function seleccionar() {
    console.log("SE HIZO CLICK");
  }

  function navigateToQuiz() {
    navigate("/quiz");
  }

  return (
    <header className="App-header" onClick={navigateToQuiz}>
      <div className="inicio-test">
        <div className="cuadro" onClick={seleccionar}></div>
      </div>
    </header>
  );
};

export default Inicio;
