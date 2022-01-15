import React, { useState } from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editUser, getUsers } from '../redux/action';

const EditModal = ({user}) => {
    
        const [show, setShow] = useState(false);

        const [name, setName] = useState(user.name);
        const [email, setEmail] = useState(user.email);
        const [_id, set_id] = useState(user._id)
        
        const dispatch = useDispatch()
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const handleSubmit=(e)=>{
            e.preventDefault();
            const updUser={
                _id,
                name,
                email
            };
            dispatch(editUser(updUser));
            dispatch(getUsers())
            handleClose()
        }
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Edit
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
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

export default EditModal
