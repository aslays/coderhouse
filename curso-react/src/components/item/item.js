import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import AddtoCartProductList from '../addToCart/addToCartProductList';
import Placeholder from 'react-bootstrap/Placeholder';
//import { useState } from 'react';
//import ItemDetail from '../itemDetail/itemDetail';

const Item = (props) => {
    
    //const [modalShow, setModalShow] = useState(false);

    const url = 'product/'+props.id

    return (

        <Card key = {props.id} className = 'cardProduct' style={{ width: '18rem' }} >
            <Card.Img variant="top" src={props.picture} />
            
                {props.loading ?
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={9} />
                        </Placeholder>

                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={2} />
                        </Placeholder>

                        {/* <AddtoCartProductList key={props.id} id = {props.id} /> */}

                        <Placeholder.Button xs={6} aria-hidden="true" />
                                        
                    </Card.Body>   
                    :
                    <Card.Body>    
                        <Card.Title>{props.title}</Card.Title>    
                        
                        <Card.Text>
                            {props.description_short}
                        </Card.Text>
                        
                        <Card.Text>
                        $ {props.price}
                        </Card.Text>
                        {/* <AddtoCartProductList key= {props.id} id = {props.id}/> */}

                        {/* <Button style={{ marginTop: '20px' }} variant="primary">Añadir al Carrito</Button> */}
                    
                        <Button variant="primary" href={url} >
                            Ver mas
                        </Button>

                        

                        {/* <ItemDetail
                            title = {props.title}
                            price = {props.price}
                            description_short = {props.description_short}
                            img = {props.picture}
                            id_product = {props.id}
                            show={modalShow}
                            onHide={() => setModalShow(false)}

                        /> */}
                    
                    
                    
                    </Card.Body>
                                   
                }

                
        </Card>
    )


}

export default Item