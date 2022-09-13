import React, { useReducer, useState } from 'react'
import { Teclado, calcReducer } from './componentes'

const init =() => ({
    resultado: 10,
})
const initialState =  {
    resultado: 0,
}

export const CalcApp = () => {

    const [out, setOut] = useState(0)

    const setSalida = (datoTecla) => {
        setOut( (out) => out+datoTecla )
    }


  return (
    <div className='general' >
        <div className='salidaDatos' >{out}</div>
        <Teclado setSalida={ setSalida } />
    </div>
  )
}
