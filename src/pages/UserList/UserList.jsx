import React, { useEffect, useState } from 'react'
import './UserList.css'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { getAllUsers } from '../../services/allApi';
import { format } from 'timeago.js'

function UserList() {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await getAllUsers();
        if (res.status == 200) {
            setUsers(res.data);
        } else {
            alert("Something Went Wrong Can't Users Data")
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    console.log(users)

    const allUsersList = users.map((item) => {
        return (
            <tr>
                <td className='usernameAndPropic'>
                    <img className='profileImage' src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" alt="" />
                    <p className='userName'>{item.username}</p>
                </td>
                <td>{item.email}</td>
                <td>Active</td>
                <td>{format(item.createdAt)}<br />({item.createdAt})</td>
                <td className='actionBtns'>
                    <Link to={'/user'}><button className='statusBtn'>View & Edit</button></Link>
                    <button className='deleteBtn'><i className='fa-solid fa-trash'></i></button>
                </td>
            </tr>
        )
    })

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <Sidebar />
            <div className='rightSideBar'>
                <div className='usersContaniner'>
                    <table class="fl-table">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Registered Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsersList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList