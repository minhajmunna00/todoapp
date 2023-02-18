import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    // <Navbar>
    //     <Container>
    //       <Navbar.Brand>Notes App</Navbar.Brand>
    //       <Nav variant = "tabs">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/invites">Invites</Nav.Link>
    //         <Nav.Link href="/login">My Account</Nav.Link>
    //         <Nav.Link href="/login">Logout</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    <Navbar className="navbar-custom" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-2">
          Notes App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="me-auto"></div>
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: "100px", fontSize: "1.2rem" }}
            navbarScroll
          >
            <Link to="" className="nav-link text-dark">
              Home
            </Link>
            <Link to="" className="nav-link text-dark">
              Invites
            </Link>
            <Link to="" className="nav-link text-dark">
              My Account
            </Link>
            <Link to="" className="nav-link text-dark">
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
