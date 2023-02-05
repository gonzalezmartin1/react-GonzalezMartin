import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import CartWidget from './CartWidget';


function NavbarApp() {
  return (
    <>
      <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            GripZone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <Nav.Link href="#link">Escuela de Padel</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Paletas Importadas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Paletas Nacionales
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bolsos Paleteros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Indumentaria
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
            <Navbar.Text>
                <CartWidget />
            </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarApp;