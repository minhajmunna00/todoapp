import { useState, React } from "react";
import { useLocation, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// this component represents the page to view pdf and write annotations
export default function AnnotationPage() {
  // parameters are passed through the LINK component in PDF and extracted using the useLocation Hook
  const location = useLocation();
  //   const { filename, url } = location.state;
  const [numPages, setNumPages] = useState(null); // useState for numPages to allow multiple pages of a PDF to be displayed

  // showing and closing the delete confimation modal
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  // method that handles the delete pdf request
  const deleteHandle = () => {
    alert("delete the pdf here");
  };

  return (
    <div className="">
      <header>
        <Navbar />
        <h1>
          {" "}
          Viewing:
          {/* {filename} */}
        </h1>
      </header>

      <main>
        <Dropdown className="right">
          <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            Options
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="">Download PDF</Dropdown.Item>
            <Dropdown.Item href="">Download Annotation</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={showModal}>Delete PDF</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Container fluid>
          <Row>
            <Col>
              {/* displaying a PDF by referencing a specific PDF file in the package organiser
                            for a given PDF file, set the number of pages. for each page in the arrray, render a <Page> object */}
              <div style={{ borderRight: "2px solid red", height: "75vh" }}>
                <Document
                  // file={url}
                  onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                >
                  {Array.apply(null, Array(numPages))
                    .map((x, i) => i + 1)
                    .map((page) => (
                      <Page pageNumber={page} renderTextLayer={false} />
                    ))}
                </Document>
              </div>
            </Col>

            <Col>
              <div style={{ height: "75vh" }}>
                <div className="h-75 py-3 scroll">
                  <div className="d-flex align-items-center mb-2">
                    <div style={{ width: "80%" }}>
                      <p className="bg-primary p-2 rounded-4 text-white m-0">
                        Message Text HereMessage Text HereMessage Text
                        HereMessage Text Here
                      </p>
                    </div>
                    <div className="ms-3">
                      <i class="fa-solid fa-pen-to-square me-4"></i>
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div style={{ width: "80%" }}>
                      <p className="bg-primary p-2 rounded-4 text-white m-0">
                        Message Text HereMessage Text HereMessage Text
                        HereMessage Text Here
                      </p>
                    </div>
                    <div className="ms-3">
                      <i class="fa-solid fa-pen-to-square me-4"></i>
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div style={{ width: "80%" }}>
                      <p className="bg-primary p-2 rounded-4 text-white m-0">
                        Message Text HereMessage Text HereMessage Text
                        HereMessage Text Here
                      </p>
                    </div>
                    <div className="ms-3">
                      <i class="fa-solid fa-pen-to-square me-4"></i>
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div style={{ width: "80%" }}>
                      <p className="bg-primary p-2 rounded-4 text-white m-0">
                        Message Text HereMessage Text HereMessage Text
                        HereMessage Text Here
                      </p>
                    </div>
                    <div className="ms-3">
                      <i class="fa-solid fa-pen-to-square me-4"></i>
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div style={{ width: "80%" }}>
                      <p className="bg-primary p-2 rounded-4 text-white m-0">
                        Message Text HereMessage Text HereMessage Text
                        HereMessage Text Here
                      </p>
                    </div>
                    <div className="ms-3">
                      <i class="fa-solid fa-pen-to-square me-4"></i>
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div style={{ width: "80%" }}>
                      <p className="bg-primary p-2 rounded-4 text-white m-0">
                        Message Text HereMessage Text HereMessage Text
                        HereMessage Text Here
                      </p>
                    </div>
                    <div className="ms-3">
                      <i class="fa-solid fa-pen-to-square me-4"></i>
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div style={{ width: "80%" }}>
                      <p className="bg-primary p-2 rounded-4 text-white m-0">
                        Message Text HereMessage Text HereMessage Text
                        HereMessage Text Here
                      </p>
                    </div>
                    <div className="ms-3">
                      <i class="fa-solid fa-pen-to-square me-4"></i>
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div style={{ width: "80%" }}>
                      <p className="bg-primary p-2 rounded-4 text-white m-0">
                        Message Text HereMessage Text HereMessage Text
                        HereMessage Text Here
                      </p>
                    </div>
                    <div className="ms-3">
                      <i class="fa-solid fa-pen-to-square me-4"></i>
                      <i class="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>
                <div className="h-25 d-flex align-items-end">
                  <InputGroup className="mb-3 ">
                    <Form.Control
                      placeholder="type your comment"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      <i class="fa-solid fa-paper-plane fa-2x"></i>
                    </Button>
                  </InputGroup>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* the modal that pops up when a delete is about to be made */}
        <Modal show={show} backdrop="static" centered onHide={closeModal}>
          <Modal.Header>
            <Modal.Title>Warning!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Are you sure you want to delete this PDF? <br />
            This action cannot be reversed
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Link to="/">
              <Button variant="danger" onClick={deleteHandle}>
                Delete
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </main>
    </div>
  );
}
