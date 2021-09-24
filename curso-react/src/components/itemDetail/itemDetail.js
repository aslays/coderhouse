//import Modal from 'react-bootstrap/Modal'
//import Button from 'react-bootstrap/Button'
//import dataProducts from "../../datas/dataProducts";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import AddtoCartProductList from '../addToCart/addToCartProductList';
//import Placeholder from 'react-bootstrap/Placeholder';

const ItemDetail = (props) => {

  //console.log(props)


  return (
    <Card.Body>    
        
        <Card.Title>{props.productDetail.nombre}</Card.Title>    
        
        <Card.Text>
            {props.productDetail.descripcion_short}
        </Card.Text>
        
        <Card.Text>
        $ {props.productDetail.price}
        </Card.Text>
        {/* <AddtoCartProductList id = {props.id}/> */}

        {/* <Button style={{ marginTop: '20px' }} variant="primary">Añadir al Carrito</Button> */}
    
        <Button variant="primary" >
            Comprar
        </Button>

    
    </Card.Body>
  )
}

export default ItemDetail