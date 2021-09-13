import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const AddtoCartProductList = () =>{
      
    const [cartProducts, setCount] = useState(0)
    const stock = 8;

    const discountCartItem = () => {
        if(cartProducts >= 1)
        setCount(cartProducts - 1)
    }

    const sumItemToCart = () =>{
        if (cartProducts < stock)
        setCount(cartProducts + 1)
    }

    return(
               
        <ButtonGroup className="buttonsAddCart">
            <Button onClick = {discountCartItem}> - </Button>

            <div><input className="inputCart" type ="text" value = {cartProducts} placeholder="0"></input></div>
            
            <Button onClick = {sumItemToCart}> + </Button>
        </ButtonGroup>
    )
}

export default AddtoCartProductList