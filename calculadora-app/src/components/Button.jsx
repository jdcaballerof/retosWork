import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import "./styles/Button.css";


export const Button = ({ symbol, handleClick, symbolSec, nombreClase }) => {

  const {addToText, resetInput, calculateResult, text} = useContext(CalcContext)

  const onClick = () => {
    (handleClick === 'calculateResult') ? calculateResult(text) : (handleClick === 'resetInput') ? resetInput() :  addToText(symbol)
  }

  return (
    <div
      onClick={ onClick }
      className={ !!nombreClase ? `button-wrapper ${nombreClase}`: "button-wrapper" }
    >
      {!!symbolSec ? symbolSec : symbol }
    </div>
  );
};


