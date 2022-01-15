import React, { useState } from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';

const AddModal = () => {
    
        const [show, setShow] = useState(false);

        const [name, setName] = useState();
        const [email, setEmail] = useState();
        
        const dispatch = useDispatch()
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const handleSubmit=(e)=>{
            e.preventDefault();
            const newUser={
                name,
                email
            };
            dispatch(addUser(newUser));
            setName('');
            setEmail('');
            handleClose()
        }
      
        return (
          <>
            <Button variant="outline-primary" onClick={handleShow}>
              Add New User
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
              </Modal.Header>
                  <form onSubmit={handleSubmit}>
              <Modal.Body>
              <FormControl
      placeholder="Name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value={name}
      onChange={(e)=>setName(e.target.value)}
    />
                <FormControl
      placeholder="Email"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    />
              </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button type='submit' variant="primary" onSubmit={handleSubmit}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
              </form>
            </Modal>
          </>
        );
      }

export default AddModal
