import React from "react";
import "./resultado.css"
import { useNavigate } from "react-router-dom";

const Resultado = () => {
  const navigate = useNavigate();
  function seleccionar() {
    console.log("SE HIZO CLICK");
  }

  function navigateToQuiz() {
    navigate ("./");
  }

  return (
    <div className="fond" onClick={navigateToQuiz}>
      <div className="contenedor">
       
      </div>
    </div>
  );
};

export default Resultado
