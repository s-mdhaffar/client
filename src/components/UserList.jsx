import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getUsers } from '../redux/action'
import UserCard from './UserCard'

const UserList = () => {
    const {loading,users} = useSelector(state =>state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        
        <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-around'}}>
             {loading ?"Loading...": users.map((el,i)=><UserCard key={i} user={el}/>)}
        </div>
    )
}

export default UserList
