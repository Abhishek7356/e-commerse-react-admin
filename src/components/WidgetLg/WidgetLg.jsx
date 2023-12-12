import React, { useEffect, useState } from 'react'
import './WidgetLg.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getNewOrders } from '../../services/allApi';
import {format} from 'timeago.js'


function WidgetLg() {

    const [newOrders, setNewOrders] = useState([]);
    const currentUser = useSelector((state) => state.userReducer.user)
    // console.log(currentUser)
    const navigate = useNavigate()

    const fetchNewOrders = async () => {
        if (currentUser) {
            const reqHeader = {
                "Content-Type": "application/json",
                "token": `Bearer ${currentUser.accessToken}`
            }
            const response = await getNewOrders(reqHeader);
            setNewOrders(response.data)
        }
    }

    console.log(newOrders)
    useEffect(() => {
        fetchNewOrders()
    }, [])

    const allNewOrders = newOrders.map((item, key) => {
        return (
            <tr>
                <td className='usernameAndPropic'>
                    <p className='userName'>{item.userId}</p>
                </td>
                <td>{format(item.createdAt)} <br/>({item.createdAt})</td>
                <td>₹ {item.amount} </td>
                <td>
                    <button className='statusBtn'>{item.status}</button>
                </td>
            </tr>
        )
    })

    return (
        <div className='widgetLg'>
            <h2 className='widgetLgHeader'>Latest Transactions</h2>
            <table class="fl-table">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {allNewOrders}
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLg