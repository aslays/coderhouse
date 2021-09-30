import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/cartWidget';


const NavBar = () => {

    return(

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Wualá-E</Navbar.Brand>
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
                    <CartWidget/>
                </Nav>

            </Container>
        </Navbar>
        
        

    )

}

export default NavBar