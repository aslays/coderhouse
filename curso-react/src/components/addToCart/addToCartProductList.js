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
               
        <ButtonGroup id="buttonsAddCart">
            <Button onClick = {discountCartItem}> - </Button>

            <div><input id="inputCart" type ="text" value = {cartProducts}></input></div>
            
            <Button onClick = {sumItemToCart}> + </Button>
        </ButtonGroup>
    )
}

export default AddtoCartProductList