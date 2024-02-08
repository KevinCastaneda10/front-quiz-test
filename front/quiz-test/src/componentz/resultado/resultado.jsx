import React, { useEffect, useState } from "react";
import "./resultado.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Resultado = () => {
  const [result, setResult] = useState({})
  const navigate = useNavigate();
  function seleccionar() {
    console.log("SE HIZO CLICK");
  }

  function navigateToQuiz() {
    navigate ("./");
  }

  async function getResult(){
    let resp = await axios.get('http://localhost:8080/quiz/')
    console.log(resp?.data)
    // setResult(resp?.data?.data[0]?.questions)
  }

  useEffect(() => {
    getResult()
  }, [])

  return (
    <div className="fond" onClick={navigateToQuiz}>
      <div className="contenedor">
       
      </div>
    </div>
  );
};

export default Resultado
