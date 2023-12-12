import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'

function User() {
    return (
        <div style={{display:'flex',width:'100%'}}>
            <Sidebar />
            <div className='rightSideBar'>
                <div className='userTopSec'>
                    <h2>Edit User</h2>
                    <Link to={'/new-user'} style={{ textDecoration: 'none' }}><button className='createBtn'>CREATE USER</button></Link>
                </div>
                <div className='userViewAndEditContainer'>
                    <div className='leftUserBar'>
                        <div className='userNameAndPropic'>
                            <img className='userProfilePic' src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" alt="" />
                            <div className='userDesignation'>
                                <h3>User</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                        <h3>Account Details</h3>
                        <div className='userAllDetails'>
                            <i class="fa-solid fa-user"></i>
                            <p>User</p>
                        </div>
                        <div className='userAllDetails'>
                            <i class="fa-regular fa-calendar"></i>
                            <p>10/12/2023</p>
                        </div>
                        <h3>Contact Details</h3>
                        <div className='userAllDetails'>
                            <i class="fa-solid fa-mobile"></i>
                            <p>9999999999</p>
                        </div>
                        <div className='userAllDetails'>
                            <i class="fa-solid fa-envelope"></i>
                            <p>user@gmail.com</p>
                        </div>
                        <div className='userAllDetails'>
                            <i class="fa-solid fa-location-dot"></i>
                            <p>New York</p>
                        </div>
                    </div>
                    <div className='rightUserBar'>
                        <h2>Edit</h2>
                        <div className='editBox'>
                            <div className='editInputBox'>
                                <div className='inputfield'>
                                    <label>Username</label>
                                    <input type="text" placeholder='Username' />
                                </div>
                                <div className='inputfield'>
                                    <label>Full Name</label>
                                    <input type="text" placeholder='Fullname' />
                                </div>
                                <div className='inputfield'>
                                    <label>Email</label>
                                    <input type="email" placeholder='Email address' />
                                </div>
                                <div className='inputfield'>
                                    <label>Phone</label>
                                    <input type="number" placeholder='Phone number' />
                                </div>
                                <div className='inputfield'>
                                    <label>Address</label>
                                    <input type="text" placeholder='Address' />
                                </div>
                            </div>
                            <div className='imgUploadBoxOuter'>
                                <div className='imgUploadBox'>
                                    <img src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" alt="" />
                                    <button className='uploadBtn'><i class="fa-solid fa-upload"></i></button>
                                </div>
                                <button className='updateBtn'>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default User