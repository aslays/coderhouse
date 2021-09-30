import { useState } from 'react'
import Button from 'react-bootstrap/Button'
//import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Modal from 'react-bootstrap/Modal'

const AddtoCartConfirm = (props) =>{

//console.log(props.nombre)
      
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Añadir al Carrito
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>Acabas de añadir {props.compra} unidades de {props.product.nombre} al carrito</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" href="/cart">
            Ver Carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddtoCartConfirm