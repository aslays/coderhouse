import Container from 'react-bootstrap/Container';
import ItemList from '../itemList/itemList';
import { useEffect, useState } from "react";
import dataProducts from "../../datas/dataProducts";
//import Item from "../item/item";

// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import AddtoCartProductList from '../addToCart/addToCartProductList';

const ItemListContainer = () =>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    function getDataProduct(){

        return new Promise ((resolve, reject) => { 
            setTimeout( () => resolve(dataProducts), 3000 )
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
        
        const prodLoading = {id: "productDefault", picture : '/img/producto_generico.jpg'}
              
        return(
            <Container className='container-sale' style={{display: 'flex'}} >
                
                <ItemList items = {prodLoading} loading = {true} />
            
            </Container>
        ) 

    } else {
        return (
                   
            <Container className='container-sale' style={{display: 'flex'}} >

                <ItemList items = {products} />

            </Container>
        )
    }
   
}

export default ItemListContainer