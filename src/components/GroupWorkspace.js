import { useState, useEffect, React } from "react";
import PDF from "./PDF";
import { Link } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// this component represents the group workspace, aka. showing group details and PDFs for that group
// at the moment it gets all the PDFs from 1 table, does not accomodate for which group the PDF belongs to
export default function GroupWorkspace() {
  const groupName = "Group 1"; // used to display group name - needs to be fetched from GROUP table
  const members = "member 1, member 2, member 3"; // used to display list of members - needs to be fetched from GROUP table
  const [PDFs, setPDFs] = useState([]); // used to display all of the PDFs on the workspace
  const [newFile, setFile] = useState(""); // used to store the file selected from the file input

  // this function GETs all the records in the associated table and adds them to the PDFs array
  const getPDFsFromServer = () => {
    axios.get("http://localhost:8080/pdf").then((response) => {
      setPDFs(response.data);
    });
  };

  // causes the application to conduct getPDFsFromServer() when application is first run
  useEffect(() => {
    getPDFsFromServer();
  }, []);

  // used to show and close the modal form ##########################################
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  // this function manages the file input, whenever the value in the file input is changed the variable FILE is set to that value
  const onFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    console.log(file);
  };

  // this functions runs once the SUBMIT button is pressed and ensures only PDF file-types are uploaded
  const FileHandle = (e) => {
    e.preventDefault();
    if (newFile.type !== "application/pdf") {
      alert("Invalid file, please upload a PDF only");
    } else {
      closeModal();
      addFiletoServer(newFile);
    }
  };

  /* this function manages the post request by-
        converting the file input into appropriate form data
        sending the post request via axios
        returning either success or failure
    */
  const addFiletoServer = (data) => {
    let formData = new FormData();
    formData.append("pdf", data);

    axios
      .post("http://localhost:8080/uploadPDF", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(
        (response) => {
          console.log(response.data);
          alert(response.data);
          getPDFsFromServer();
        },
        (error) => {
          alert("Could not upload pdf");
        }
      );
  };

  // JSX
  return (
    <div className="groupWorkspace">
      <header>
        <h1>{groupName}</h1>
        <h2>{members}</h2>
        <Link to="/group-settings">
          <Button variant="outline-secondary">Settings</Button>
        </Link>
      </header>

      <Container>
        <Row xs={2} md={3} lg={5} className="scroll">
          {/* {PDFs.map((pdf) => <Col key={pdf.id}><PDF pdf = {pdf}/></Col> )}     */}
          {/* for each PDF in the array PDFs, create a new column containing a PDF component  */}
        </Row>
      </Container>

      <Button variant="outline-primary" onClick={showModal}>
        Upload
      </Button>

      {/* creates the modal popup that allows the user to select the file*/}
      <Modal show={show} backdrop="static" onHide={closeModal} centered>
        <Form onSubmit={(e) => FileHandle(e)}>
          <Modal.Header>
            <Modal.Title>Upload PDF</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="formFile">
              <Form.Label>Select PDF</Form.Label>
              <Form.Control
                type="file"
                name="file"
                onChange={(e) => onFileChange(e)}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
