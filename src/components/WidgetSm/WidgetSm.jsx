import React, { useEffect, useState } from 'react'
import './WidgetSm.css'
import { getNewUsers } from '../../services/allApi';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function WidgetSm() {

    const [newUsers, setNewUsers] = useState([]);
    const currentUser = useSelector((state) => state.userReducer.user)
    console.log(currentUser)
    const navigate = useNavigate()

    const fetchNewUsers = async () => {
        if (currentUser) {
            const reqHeader = {
                "Content-Type": "application/json",
                "token": `Bearer ${currentUser.accessToken}`
            }
            const response = await getNewUsers(reqHeader);
            setNewUsers(response.data)
        }
    }

    useEffect(() => {
        fetchNewUsers()
    }, [])

    const allNewUserList = newUsers.map((item, key) => {
        return (
            <div className='widgetSmBox' key={key}>
                <div className='widgetSmUserRow'>
                    <div className='widgetSmUserPicAndName'>
                        <img src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" alt="" />
                        <p className='userName'>{item.username}</p>
                    </div>
                    <button className='displayBtn'><i class="fa-solid fa-eye"></i>Display</button>
                </div>
            </div>
        )
    })

    return (
        <div className='widgetSmContainer'>
            <h2 className='widgetSmHeader'>New Join Members</h2>
            {allNewUserList}
        </div>
    )
}

export default WidgetSm