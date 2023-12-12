import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../../services/allApi'

function Login() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    console.log(user)

    const navigate = useNavigate()

    const handleLogin = async () => {
        const { username, password } = user;
        if (username && password) {
            const response = await loginApi(user)
            console.log(response)
            if (response.status == 200) {
                sessionStorage.setItem("user", JSON.stringify(response.data));
                alert("User Login Successfull")
                navigate('/')
                window.location.reload()
            } else {
                alert(response.response.data)
            }
        } else {
            alert("Provide all details correctly")
        }
    }
    return (

        <div className='login'>
            <div className='loginBox'>
                <div className='leftSide'>
                    <div className='leftTop'>
                        <h1>Login</h1>
                        <p>Get access to your Orders, Wishlist and Recommendations</p>
                    </div>
                    <img className='image' src="https://th.bing.com/th/id/OIP.zB9r57aQ2nmQWBo3xQQD2AAAAA?pid=ImgDet&rs=1" alt="" />
                </div>
                <div className='rightSide'>
                    <input onChange={(e) => setUser({ ...user, username: e.target.value })} value={user.username} type="text" placeholder='Username' />
                    <input onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} type="password" placeholder='Password' />
                    <p>Forgot Password ?</p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>

    )
}

export default Login