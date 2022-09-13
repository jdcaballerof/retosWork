import { useContext, useState } from "react";
import "./App.css";
import {Input} from "./components/Input";
import { TecladoApp } from "./components/Teclado";
import { CalcContext } from "./context/CalcContext";

export const AppCalculadoraCopy = () => {

  const {text, result} = useContext(CalcContext)

  const [cont, setCont] = useState(1);

  const modoObs = () => setCont( cont+1)


  return (

    <div className={`App mt-3em ${ (cont%2 !== 0) ? '' : 'darkmode' } `}>
      <div className={`calc-wrapper  ${ (cont%2 !== 0) ? 'sombra' : 'sombra2 darkmode' } `}>

      <div className="switch-button">
        <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox" onChange={modoObs} />
        <label htmlFor="switch-label" className="switch-button__label"></label>
      </div>

        <Input text={text} result={result} cont={cont} />
        <div className="contenedor">
          <TecladoApp  />
        </div>
      </div>
    </div>

  );
};

