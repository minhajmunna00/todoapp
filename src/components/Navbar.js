import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavigationBar(){

    return (
        <Navbar>
            <Container>
              <Navbar.Brand>Notes App</Navbar.Brand>
              <Nav variant = "tabs">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/invites">Invites</Nav.Link> 
                <Nav.Link href="/login">My Account</Nav.Link> 
                <Nav.Link href="/login">Logout</Nav.Link> 
              </Nav>
            </Container>
          </Navbar>
    );
}