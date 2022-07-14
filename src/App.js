import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from './pages/Home'

function App() {
  return (
    <div id='container'>
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#history">History</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id="barrier"></div>
      </div>
      
      <Home />
    </div>
  );
}

export default App;
