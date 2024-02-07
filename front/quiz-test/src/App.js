import "./App.css";
import { Routes, Route } from "react-router-dom"
import Inicio from "./componentz/inicio/inicio"
import Quiz from "./componentz/quiz"
import Resultado from "./componentz/resultado/resultado.jsx";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/quiz" element={ <Quiz /> } />
        <Route path="/result" element={ <Resultado /> } />
      </Routes>
    </div>
  );
}

export default App;
