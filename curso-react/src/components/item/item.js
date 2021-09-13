import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AddtoCartProductList from '../addToCart/addToCartProductList';
import Placeholder from 'react-bootstrap/Placeholder';

const Item = (props) => {

    return (

        <Card className = 'cardProduct' style={{ width: '18rem' }} >
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

                        <AddtoCartProductList/>

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
                        <AddtoCartProductList/>

                        <Button style={{ marginTop: '20px' }} variant="primary">Añadir al Carrito</Button>
                    </Card.Body>
                                   
                }

                
        </Card>
    )


}

export default Item