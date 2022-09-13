

export const Teclado = ( {setSalida} ) => {
  // console.log('renderizo teclado');


  return (
    <div className="teclado">
            <div className="subteclado1">
                <button className="tecla">/</button>
                <button className="tecla">x</button>
                <button className="tecla">-</button>
                <button className="tecla">+</button>
                <button onClick={ () => setSalida('7') } className="tecla">7</button>
                <button onClick={ () => setSalida('8') } className="tecla">8</button>
                <button onClick={ () => setSalida('9') } className="tecla">9</button>
                <button className="tecla">^2</button>
                <button className="tecla">4</button>
                <button className="tecla">5</button>
                <button className="tecla">6</button>
                <button className="tecla">C</button>
            </div>

            <div className="subteclado2">
                <button className="tecla">1</button>
                <button className="tecla">2</button>
                <button className="tecla">3</button>
                <button className="tecla teclaIgual">=</button>
                <button className="tecla">5</button>
                <button className="tecla teclaCero">0</button>
            </div>
        </div>
  )
}
