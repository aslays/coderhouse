import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/cartWidget';
//import { useContext } from 'react';
import React, { useContext } from 'react'
import Context from '../../context/cartContext';

//import { useState, useEffect } from "react";


const NavBar = () => {

    //const cart = useContext(CartContext)
    //const [productQuantity, setProductQuantity] = useState(0)

    //console.log( "productos en el nav "+cartProducts)

    // useEffect(() => {
    //     if(cartProducts.length === 0) {
    //       setProductQuantity(0)
    //     } else {
    //       cartProducts.forEach(prod => {
    //         setProductQuantity(productQuantity + prod.quantity)
    //     })
    //     }
    //   }, [cartProducts]) // eslint-disable-line

    const {cart} = useContext(Context)

    console.log("carrito en nav "+ cart.cantidad)

    return(

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">E-ComFull</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/sales">Ofertas</Nav.Link>
                    
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/category/1">Categoria1</NavDropdown.Item>
                    <NavDropdown.Item href="/category/2">Categoria2</NavDropdown.Item>
                    <NavDropdown.Item href="/category/3">Categoria3</NavDropdown.Item>
                    
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#login">Login</Nav.Link>
                    
                </Nav>

                <Nav>
                    <CartWidget quantity={cart.cantidad}/>
                </Nav>

            </Container>
        </Navbar>
        
        

    )

}

export default NavBar