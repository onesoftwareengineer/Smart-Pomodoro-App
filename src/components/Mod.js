import React from 'react'
import {Button, Modal} from 'react-bootstrap'

function Mod() {
    const [show, setShow] = React.useState(true);
  
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return (
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Apply to jobs - 00:00</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Focus on the following task only "Search for jobs on linkedin, talk with friends, apply" or click stop.
          </Modal.Body>
          <Modal.Footer className="justify-content-start">
            <Button variant="secondary" onClick={handleClose} className="">Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Mod