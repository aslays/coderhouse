import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ItemDetail = (props) => {

    return( 
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={props.img} alt="no hay foto" />
          <h4>{props.title}</h4>
          <p>
            {props.description_short}
          </p>
          <p>$ {props.price}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ItemDetail