import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchUsers } from './userSlice'
import { useEffect } from 'react'

const UserView = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.user)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
  return (
    <div><h2>List of Users</h2>
    {users?.loading && <div>...Loading</div>}
    {users?.error && <div>{users?.error}</div>}
    {users?.users?.map(user => <p key={user.id}>{user?.name}</p>)}
    </div>
  )
}

export default UserView