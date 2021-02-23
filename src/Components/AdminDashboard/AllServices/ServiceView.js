import React, { useEffect, useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';

const ServiceView = ({show, handleClose, id}) => {
    const [service, setService] = useState();

    // useEffect(() => {
    //     fetch('http://localhost:5000/service/'+id)
    //         .then(res => res.json())
    //         .then(data =>console.log(data))
    // })
    console.log(id)
    return (
        <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
         show={show} onHide={handleClose} className="w-100">
            <Modal.Header closeButton>
            <Modal.Title>
                {/* <Image style={{height : '400px', width : '100%'}} src={service.serviceImage} alt="im"/> */}
                    
                <h2>{id}</h2>
            </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    {/* {service.serviceDetails} */}
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ServiceView;