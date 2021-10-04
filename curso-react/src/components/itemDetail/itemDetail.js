//import Modal from 'react-bootstrap/Modal'
//import Button from 'react-bootstrap/Button'
//import dataProducts from "../../datas/dataProducts";
//import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'
import AddtoCartProductDetail from '../addToCart/addToCartProductDetail';
//import AddtoCartConfirm from '../addToCart/addToCartConfirm';
//import Placeholder from 'react-bootstrap/Placeholder';

const ItemDetail = ({product}) => {

  //console.log(product)
  

  return (
    <main className="container">
      
      <div className="left-column">
        <img data-image="black" src="/img/imagen_completa.jpg" alt=""/>
        
      </div>
    
    
      
      <div className="right-column">
    
       
        <div className="product-description">
          <span>{product.nombre}</span>
          <h1>{product.nombre}</h1>
          <p>{product.descripcion_short}</p>
          <p>stock: {product.stock}</p>
        </div>
           
        <div className="product-price">
          <span>$ {product.price}</span>
          
          
        </div>

        {/* key={props.productDetail.id} id = {props.id} */}
        <AddtoCartProductDetail product = {product}  />

        
        

      </div>

      
    </main>
  )
}

export default ItemDetail