import Container from 'react-bootstrap/Container';
import ItemList from '../itemList/itemList';

// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import AddtoCartProductList from '../addToCart/addToCartProductList';

const ItemListContainer = () =>{

    return(

        <Container className='container-sale' style={{display: 'flex'}} >
          
            <ItemList />
            
        </Container>
    )


}

export default ItemListContainer