import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from './pages/Home'
import logoPNG from './assets/logo.png'

function App() {
  return (
    <div id='container'>
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" id="navVis">
          <Container>
          <Navbar.Brand href="#home"><img src={logoPNG} alt="Logo todo" width="100px"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Contact</Nav.Link> */}
              {/* <Nav.Link href="#history">History</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <div id="barrier"></div> */}
      </div>
      <Home />
    </div>
  );
}

export default App;
