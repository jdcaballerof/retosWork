import "./styles/Input.css";

export const Input = ({ text, result, cont }) => {
  return (
    <div className="input-wrapper">
      <div className="result">
      <h1 >{result}</h1>
      </div>

      <div className="text">
        <h3>{text}</h3>
      </div>
    </div>
  );
};


