import { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import AddtoCartConfirm from './addToCartConfirm'
import CartContext   from '../../context/cartContext'

const AddtoCartProductDetail = ({product}) =>{
      
    const [cartProducts, setCount] = useState(0)
    const stock = product.stock;

    const { setQuantityCart } = useContext(CartContext)

    const discountCartItem = () => {
        if(cartProducts >= 1)
        setCount(cartProducts - 1)
    }

    const sumItemToCart = () =>{
        if (cartProducts < stock)
        setCount(cartProducts + 1)
    }

    // const resetToCart = () =>{

    //     setCount(0)
    // }

    const onAddtoCart = () =>{
        
        // const newProduct = {
        //     ...product,
        //     quantity: cartProducts
        // }
              
        //addProdFunction([...productsAdded, newProduct])

        setQuantityCart(cartProducts)

        //resetToCart()
        
        
    }

    return(
       <> 

          
        <ButtonGroup className="buttonsAddCartProdDetail" key={product.id} >
            <Button key='key_test1' onClick = {discountCartItem}> - </Button>

            <div><input className="inputCart" type ="text" value = {cartProducts} placeholder="0"></input></div>
            
            <Button key='key_test2' onClick = {sumItemToCart}> + </Button>
            
            

        </ButtonGroup>

        
        <div onClick={onAddtoCart} >
            
            <AddtoCartConfirm product = {product} compra = {cartProducts} />
        
        </div>
        
        </>
    )
}

export default AddtoCartProductDetail