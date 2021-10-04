import React, { useState } from 'react'

const Context = React.createContext([])

export const CartContextProvider = ({children}) => {
    
    const [cantidad, setCantidad] = useState(0)
    //const [severity, setSeverity] = useState('')

    const setQuantityCart = ( cantidad ) => {
        setCantidad(cantidad)
        //setSeverity(severity)
        setTimeout(() => {
            //setCantidad()
        }, 3000)
    }

    //console.log(children)

    console.log("cantidad provider " + cantidad)

    return (
        <Context.Provider 
            value={{
               cart: {
                   cantidad
               },
               setQuantityCart

            }}
        >
            {children}
        </Context.Provider>
    )
}


export default Context

