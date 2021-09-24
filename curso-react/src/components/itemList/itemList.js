//import { useEffect, useState } from "react";
import Item from "../item/item";


const ItemList = (props) =>{
   
    
    if(props.loading){

      return <Item key={'pLoading'} id = 'productDefault' picture = '/img/producto_generico.jpg' loading = {true} />

    }else{
        
        return(
            props.items.map( product => (   
                    
                <Item key={product.id} id = {product.id} title = {product.nombre} price ={product.price} description_short = {product.descripcion_short} picture ={product.picture} />    
                        
            ))
        )
    }
   
    

}

export default ItemList