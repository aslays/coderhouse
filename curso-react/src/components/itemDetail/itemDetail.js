//import Modal from 'react-bootstrap/Modal'
//import Button from 'react-bootstrap/Button'
//import dataProducts from "../../datas/dataProducts";
//import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'
import AddtoCartProductDetail from '../addToCart/addToCartProductDetail';
//import AddtoCartConfirm from '../addToCart/addToCartConfirm';
//import Placeholder from 'react-bootstrap/Placeholder';

const ItemDetail = (props) => {

  //console.log(props)

  return (
    <main className="container">
      
      <div className="left-column">
        <img data-image="black" src="/img/imagen_completa.jpg" alt=""/>
        
      </div>
    
    
      
      <div className="right-column">
    
       
        <div className="product-description">
          <span>{props.productDetail.nombre}</span>
          <h1>{props.productDetail.nombre}</h1>
          <p>{props.productDetail.descripcion_short}</p>
          <p>stock: {props.productDetail.stock}</p>
        </div>
           
        <div className="product-price">
          <span>$ {props.productDetail.price}</span>
          
          
        </div>

        <AddtoCartProductDetail key={props.productDetail.id} id = {props.id} stock = {props.productDetail.stock} product={props.productDetail} />

        
        

      </div>

      
    </main>
  )
}

export default ItemDetail