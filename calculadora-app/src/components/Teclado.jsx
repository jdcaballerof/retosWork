import { teclas } from "../helper/teclasData";
import { Button } from "./Button";

export const TecladoApp = () => {


return (
<>

    {
        teclas.map( (tecla,i) => <Button key={i} symbol={tecla.symbol} symbolSec={tecla.symbolSec}  handleClick={tecla.handleClick} nombreClase={tecla.nombreClase} />)
    }

</>
);
};