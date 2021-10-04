import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

// import { useContext } from 'react';
// import { CartContext } from '../../context/cartContext';



const CartWidget = (props) =>{

    //const cart = useContext(CartContext)


    return (

        <div>
            <a href ="/cart">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            
            <p id="label-cart">{props.quantity}</p>
            </a>
        </div>
        
    )

}

export default CartWidget