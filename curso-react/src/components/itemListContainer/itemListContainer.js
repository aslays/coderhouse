import Container from 'react-bootstrap/Container';
import ItemList from '../itemList/itemList';
import { useEffect, useState } from "react";
import dataProducts from "../../datas/dataProducts";
import { useParams } from 'react-router';
//import Item from "../item/item";

// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import AddtoCartProductList from '../addToCart/addToCartProductList';

const ItemListContainer = () =>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    const categoryId = useParams()

    console.log("categoria filtrar "+categoryId.id)
    //let filtered = []

    function getDataProduct(){
       
        let productos = dataProducts

        if(categoryId.id){
            // eslint-disable-next-line eqeqeq
            productos = dataProducts.filter(product => product.category_id == categoryId.id)
          
            console.log("filtro categoria " +categoryId.id)
          }


        return new Promise ((resolve, reject) => { 

            setTimeout( () => resolve(productos), 3000 )
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
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
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