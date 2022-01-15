import { Button,Card } from 'react-bootstrap'
import React from 'react'
import { useDispatch } from 'react-redux'
import { delUser } from '../redux/action'
import EditModal from './EditModal'

const UserCard = ({user}) => {

    const dispatch = useDispatch()

    const handleDelete=()=>{
        dispatch(delUser(user._id))
    }
    
    return (
        <div>
            <Card style={{ width: '18rem' ,margin:'1rem', borderRadius:'20px'}}>
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
      {user.email}
    </Card.Text>
    <Card.Text>
      {user.subDate}
    </Card.Text>
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
    <EditModal user={user}/>
  </Card.Body>
</Card>
        </div>
    )
}

export default UserCard
