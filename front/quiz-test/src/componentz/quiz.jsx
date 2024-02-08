import React, { useEffect, useState } from "react";
import "./quiz.css";
import data from "../data/data";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const [classLi, setClassLi] = useState({});
  const [objEleQ1, setObjEleQ1] = useState({});
  const [objEleQ2, setObjEleQ2] = useState({});
  const [objEleQ3, setObjEleQ3] = useState({});
  const [objEleQ4, setObjEleQ4] = useState({});
  const [objEleQ5, setObjEleQ5] = useState({});
  const [objEleQ6, setObjEleQ6] = useState({});
  const [objEleQ7, setObjEleQ7] = useState({});
  const [objEleQ8, setObjEleQ8] = useState({});
  const [objEleQ9, setObjEleQ9] = useState({});
  const [objEleQ10, setObjEleQ10] = useState({});
  const [responseCompleted, setResponseCompleted] = useState({});

  function selectedOption(e) {


    let questionSelected = e.target.id;
    setResponseCompleted(() => {
      if (!questionSelected.split("")[2]) {
        return { ...responseCompleted, [questionSelected.split("")[0]]: questionSelected.split("")[1] }
      }
      return {
        ...responseCompleted,
        [questionSelected.split("")[0] + "" + questionSelected.split("")[1]]: questionSelected.split("")[2]
      }

    })

    if (questionSelected.split("")[0] == "1" && !questionSelected.split("")[2]) {
      setObjEleQ1(() => {
        return { [questionSelected]: "opc-selected" }
      })
    }
    if (questionSelected.split("")[0] == "2") {
      setObjEleQ2(() => {
        return { [questionSelected]: "opc-selected" }
      })
    }
    if (questionSelected.split("")[0] == "3") {
      setObjEleQ3(() => {
        return { [questionSelected]: "opc-selected" }
      })
    }
    if (questionSelected.split("")[0] == "4") {
      setObjEleQ4(() => {
        return { [questionSelected]: "opc-selected" }
      })
    }
    else if (questionSelected.split("")[0] == "5") {
      setObjEleQ5(() => {
        return { [questionSelected]: "opc-selected" }
      })
    }
    else if (questionSelected.split("")[0] == "6") {
      setObjEleQ6(() => {
        return { [questionSelected]: "opc-selected" }
      })
    }
    else if (questionSelected.split("")[0] == "7") {
      setObjEleQ7(() => {
        return { [questionSelected]: "opc-selected" }
      })
    }
    else if (questionSelected.split("")[0] == "8") {
      setObjEleQ8(() => {
        return { [questionSelected]: "opc-selected" }
      })
    }
    else if (questionSelected.split("")[0] == "9") {
      setObjEleQ9(() => {
        return { [questionSelected]: "opc-selected" }
      })
    } else {
      setObjEleQ10(() => {
        return { [questionSelected]: "opc-selected" }
      })
    }

    let onjRes = {
      ...objEleQ1,
      ...objEleQ2,
      ...objEleQ3,
      ...objEleQ4,
      ...objEleQ5,
      ...objEleQ6,
      ...objEleQ7,
      ...objEleQ8,
      ...objEleQ9,
      ...objEleQ10
    }
    setClassLi((obj) => {
      return onjRes
    })
  }

  function sendResult() {
    // navigate("/result");
    console.log(objEleQ1)
  }
  useEffect(() => {
    console.log(responseCompleted)
  })

  return (
    <div className="coninter-gen" >
      <div className="container">
        {data.questions.map((ele, ind) => {
          return (
            <div className="question" key={ind}>
              <h1>
                {ind + 1}. {ele.question}
              </h1>
              <ul className="list-options">
                {ele.options.map((op, indOp) => {
                  return (
                    <li
                      key={indOp}
                      id={`${ind + 1}${indOp + 1}`}
                      className={`opc ${classLi[`${ind + 1}${indOp + 1}`]} && ""`}
                      onClick={selectedOption}
                    >
                      {" "}
                      {op[indOp + 1]}{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        {Object.keys(responseCompleted).length >= 10 &&
          <div className="boton" onClick={sendResult} >Enviar</div>}

      </div>
    </div>
  );
};

export default Quiz;
