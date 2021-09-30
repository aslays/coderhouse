import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router';
import dataProducts from "../../datas/dataProducts";
import { useEffect, useState } from "react";
import ItemDetail from '../itemDetail/itemDetail';



const ItemDetailContainer = () =>{

    const idItem = useParams()

    console.log(idItem.id)
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProducts] = useState([]);
    
    function getDataItem(){

        return new Promise ((resolve, reject) => { 
            // eslint-disable-next-line eqeqeq
            setTimeout( () => resolve(  dataProducts.find( prod => prod.id == idItem.id )   ), 2000 )
        })
       
    }

    useEffect(() => {
        
        getDataItem()
        
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
        
        //const prodLoading = {id: "productDefault", picture : '/img/producto_generico.jpg'}
              
        return(
            <Container key ={product.id} className='container-sale' style={{display: 'flex'}} >
                
            <div>Loading...</div>   
            
            </Container>
        ) 

    } else {
        return (
                   
            <Container key ={product.id} className='container-sale' style={{display: 'flex'}} >

            {/* <div>aca el div de detalle de producto {idItem.id}  
                <p>id producto: {product.id}</p>
                <p>price : {product.price}</p>
                <p>url_img: {product.picture}</p>
            </div> */}
           
            <ItemDetail key ={product.id} productDetail = {product} />
            

            </Container>
        )
    }



}

export default ItemDetailContainer