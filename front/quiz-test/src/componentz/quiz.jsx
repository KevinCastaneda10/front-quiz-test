import React, { useState } from "react";
import "./quiz.css";
import data from "../data/data";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const [classLi, setClassLi] = useState({
    "1-1": "opc",
    "1-2": "opc",
    "1-3": "opc",
    "1-4": "opc",

    "2-1": "opc",
    "2-2": "opc",
    "2-3": "opc",
    "2-4": "opc",

    "3-1": "opc",
    "3-2": "opc",
    "3-3": "opc",
    "3-4": "opc",

    "4-1": "opc",
    "4-2": "opc",
    "4-3": "opc",
    "4-4": "opc",

    "5-1": "opc",
    "5-2": "opc",
    "5-3": "opc",
    "5-4": "opc",

    "6-1": "opc",
    "6-2": "opc",
    "6-3": "opc",
    "6-4": "opc",

    "7-1": "opc",
    "7-2": "opc",
    "7-3": "opc",
    "7-4": "opc",

    "8-1": "opc",
    "8-2": "opc",
    "8-3": "opc",
    "8-4": "opc",

    "9-1": "opc",
    "9-2": "opc",
    "9-3": "opc",
    "9-4": "opc",

    "10-1": "opc",
    "10-2": "opc",
    "10-3": "opc",
    "10-4": "opc",
  });

  function selectedOption(e) {
    let questionSelected = e.target.id.split("-");
    console.log(questionSelected[0]);
    console.log(questionSelected[1]);

    if (questionSelected[0] == 1) {
      if (questionSelected[1] == 1) {
        setClassLi({
          "1-1": "opc-selected",
          "1-1": "opc",
          "1-1": "opc",
          "1-1": "opc",
        });
      }
      if (questionSelected[1] == 2) {
        setClassLi({
          "1-1": "opc",
          "1-1": "opc-selected",
          "1-1": "opc",
          "1-1": "opc",
        });
      }
      if (questionSelected[1] == 3) {
        setClassLi({
          "1-1": "opc",
          "1-1": "opc",
          "1-1": "opc-selected",
          "1-1": "opc",
        });
      }
      if (questionSelected[1] == 4) {
        setClassLi({
          "1-1": "opc",
          "1-1": "opc",
          "1-1": "opc",
          "1-1": "opc-selected",
        });
      }
    }
  }

  function sendResult(){
    console.log("BOTON!!")
    navigate("/result");
  }

  return (
    <div className="coninter-gen" >
      <div className="container">
        {data.questions.map((ele, ind) => {
          return (
            <div className="question">
              <h1>
                {ind + 1}. {ele.question}
              </h1>
              <ul className="list-options">
                {ele.options.map((op, indOp) => {
                  console.log(classLi[ind + 1 + "-" + (indOp + 1)]);
                  // console.log(
                  //   classLi[indOp][indOp + 1][
                  //     ind + 1 + "-" + (indOp + 1).toString()
                  //   ]
                  // );
                  return (
                    <li
                      id={ind + 1 + "-" + (indOp + 1)}
                      className={classLi[ind + 1 + "-" + (indOp + 1)]}
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
        <div className="boton" onClick={sendResult} >Enviar</div>
      </div>
    </div>
  );
};

export default Quiz;
