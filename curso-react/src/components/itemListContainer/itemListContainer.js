import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ItemListContainer = (props) =>{

    return(

        <Container id='container-sale'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/img/producto_generico.jpg" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description_short}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </Container>
    )


}

export default ItemListContainer