import Container from "react-bootstrap/esm/Container"
//import ItemList from "../itemList/itemList"


const CartContainer = () => {

    //console.log(productsAdded)
    
    return (
        <Container style={{display: 'flex'}} >
    
        <div>
            <h1>Cart</h1>
            
            {/* <ItemList items={productsAdded} /> */}

        </div>
    
        </Container>
    )

}

export default CartContainer