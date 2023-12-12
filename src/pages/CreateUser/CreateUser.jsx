import React from 'react'
import './CreateUser.css'
import Sidebar from '../../components/Sidebar/Sidebar'

function CreateUser() {
    return (
        <div style={{display:'flex',width:'100%'}}>
            <Sidebar />
            <div className='rightSideBar'>
                <h2>Create User</h2>
                <div className='inputContainer'>
                    <div className='newUserInputBox'>
                        <label>Username</label>
                        <input type="text" placeholder='Username' />
                    </div>
                    <div className='newUserInputBox'>
                        <label>Full Name</label>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className='newUserInputBox'>
                        <label>Email Address</label>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className='newUserInputBox'>
                        <label>Password</label>
                        <input type="password" placeholder='create password' />
                    </div>
                    <div className='newUserInputBox'>
                        <label>Phone</label>
                        <input type="number" placeholder='Phone number' />
                    </div>
                    <div className='newUserInputBox'>
                        <label>Address</label>
                        <input type="text" placeholder='Address' />
                    </div>
                    <div className='newUserInputBox'>
                        <p>Gender</p>
                        <div className='genderInput'>
                            <input type="radio" name='gender' id='male' value='male' />
                            <label for="male">Male</label>
                            <input type="radio" id='female' name='gender' value='female' />
                            <label for="female">Female</label>
                            <input type="radio" id='others' name='gender' value='others' />
                            <label for="others">Others</label>
                        </div>
                    </div>
                    <div className='newUserInputBox'>
                        <label>Active</label>
                        <select>
                            <option value="true">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <button className='createNewUserBtn'>Create</button>
            </div>
        </div>
    )
}

export default CreateUser