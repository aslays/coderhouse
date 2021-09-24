import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const CartWidget = () =>{

    return (

        <div>
            <a href ="/cart">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            
            <p id="label-cart">0</p>
            </a>
        </div>
        
    )

}

export default CartWidget