import { useEffect, useState } from "react";
import Item from "../item/item";
import dataProduct from "../../datas/dataProduct";

const ItemList = () =>{
   
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    function getDataProduct(){

        return new Promise ((resolve, reject) => { 
            setTimeout( () => resolve(dataProduct), 3000 )
        })
       
    }

    
    useEffect(() => {
        
        getDataProduct()
        
        .then(
            (result) => {
            setIsLoaded(true);
            setProducts(result);
            },
            
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        
        
        return <Item key='1' picture = '/img/producto_generico.jpg' loading = {true} />;
    
        
    } else {
        return (
        
            products.map( product => (   
            
                <Item key={product.id} title = {product.nombre} price ={product.price} description_short = {product.descripcion_short} picture ={product.picture} />    
                
            ))

        );
    }










    // return(

        

    //         dataProduct.map( product => (   
            
    //         <Item key={product.id} title = {product.nombre} price ={product.price} description_short = {product.descripcion_short} picture ={product.picture} />    
            
    //         ))

       
    // )

}

export default ItemList