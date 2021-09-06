import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'


const CartWidget = () =>{

    return (

        <div>
            <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
            
            <p id="label-cart">0</p>
            
        </div>
        
    )

}

export default CartWidget