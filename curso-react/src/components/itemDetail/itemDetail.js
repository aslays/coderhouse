//import Modal from 'react-bootstrap/Modal'
//import Button from 'react-bootstrap/Button'
//import dataProducts from "../../datas/dataProducts";
//import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'
//import AddtoCartProductList from '../addToCart/addToCartProductList';
//import Placeholder from 'react-bootstrap/Placeholder';

const ItemDetail = (props) => {

  //console.log(props)


  return (
    <main class="container">
      
      <div class="left-column">
        <img data-image="black" src="/img/imagen_completa.jpg" alt=""/>
        
      </div>
    
    
      
      <div class="right-column">
    
       
        <div class="product-description">
          <span>{props.productDetail.nombre}</span>
          <h1>{props.productDetail.nombre}</h1>
          <p>{props.productDetail.descripcion_short}</p>
        </div>
           
        <div class="product-price">
          <span>$ {props.productDetail.price}</span>
          
          
        </div>
      </div>

    </main>
  )
}

export default ItemDetail