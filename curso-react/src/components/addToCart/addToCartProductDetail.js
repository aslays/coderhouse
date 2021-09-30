import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import AddtoCartConfirm from './addToCartConfirm'

const AddtoCartProductDetail = (props) =>{
      
    const [cartProducts, setCount] = useState(0)
    const stock = props.stock;

    const discountCartItem = () => {
        if(cartProducts >= 1)
        setCount(cartProducts - 1)
    }

    const sumItemToCart = () =>{
        if (cartProducts < stock)
        setCount(cartProducts + 1)
    }

    return(
       <>          
        <ButtonGroup className="buttonsAddCartProdDetail" key={props.id} >
            <Button onClick = {discountCartItem}> - </Button>

            <div><input className="inputCart" type ="text" value = {cartProducts} placeholder="0"></input></div>
            
            <Button onClick = {sumItemToCart}> + </Button>
            
            <AddtoCartConfirm product = {props.product} compra = {cartProducts} />

        </ButtonGroup>

        
        </>
    )
}

export default AddtoCartProductDetail