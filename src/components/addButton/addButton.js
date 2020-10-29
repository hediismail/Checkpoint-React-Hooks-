import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./addButton.css"
function Add({ handleAdd }) {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState(``);
  const [description, setDescription] = useState(``);
  const [url, setUrl] = useState(``);
  const [rate, setRate] = useState(``);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "10vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Title</h4><input className="inputStyle" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
          <h4>Picture Url</h4><input className="inputStyle" value={url} onChange={(e) => setUrl(e.target.value)} /><br />
          <h4>Description</h4><input className="inputStyle" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
          <h4>Rate</h4><input className="inputStyle" value={rate} onChange={(e) => setRate(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleAdd(title, description, url, rate); handleClose(); setTitle(''); setUrl(''); setDescription(''); setRate('') }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;