import React, { useState } from "react";
import "../styles/Announcements.css";
import { Modal, Button } from "react-bootstrap";

function AnnouncementCard(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);  

  return (
    <>
    <div className="container" >
      <div className="acard" onClick={handleShow}>
        <p>{props.heading}</p>
        <h5>{props.club} | {props.date}</h5>
      </div>

      <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.club} | {props.date}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.desc}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
    </>
  );

}

export default AnnouncementCard;
