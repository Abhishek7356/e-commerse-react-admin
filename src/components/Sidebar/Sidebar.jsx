import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='siderOuterContainer'>
            <div className='sidebar'>
                <div className='sidebarHead'>
                    <h4>Dashboard</h4>
                    <ul className='sidebarContent'>
                        <Link to={'/'} style={{ textDecoration: 'none' }}><li className='sidebarContentItems'>
                            <i class="fa-solid fa-house"></i>
                            Home
                        </li></Link>
                        <li className='sidebarContentItems'>
                            <i class="fa-solid fa-chart-line"></i>
                            Analytics
                        </li>
                        <li className='sidebarContentItems'>
                            <i class="fa-solid fa-chart-line"></i>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarHead'>
                    <h4>Quick Menu</h4>
                    <ul className='sidebarContent'>
                        <Link to={'/users'} style={{ textDecoration: 'none' }}>
                            <li className='sidebarContentItems'>
                                <i class="fa-solid fa-users"></i>
                                Users
                            </li>
                        </Link>
                        <Link to={'/products'} style={{textDecoration:'none'}}><li className='sidebarContentItems'>
                            <i class="fa-solid fa-bars-progress"></i>
                            Products
                        </li></Link>
                        <li className='sidebarContentItems'>
                            <i class="fa-solid fa-dollar-sign"></i>
                            Transactions
                        </li>
                        <li className='sidebarContentItems'>
                            <i class="fa-solid fa-chart-pie"></i>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sidebarHead'>
                    <h4>Notifications</h4>
                    <ul className='sidebarContent'>
                        <li className='sidebarContentItems'>
                            <i class="fa-solid fa-envelopes-bulk"></i>
                            Mail
                        </li>
                        <li className='sidebarContentItems'>
                            <i class="fa-solid fa-comment"></i>
                            Feedback
                        </li>
                        <li className='sidebarContentItems'>
                            <i class="fa-solid fa-message"></i>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebarHead'>
                    <h4>Staff</h4>
                    <ul className='sidebarContent'>
                        <li className='sidebarContentItems'>
                            <i class="fa-solid fa-people-roof"></i>
                            Manage
                        </li>
                        <li className='sidebarContentItems'>
                            <i class="fa-solid fa-chart-line"></i>
                            Analytics
                        </li>
                        <li className='sidebarContentItems'>
                            <i class="fa-solid fa-chart-pie"></i>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar