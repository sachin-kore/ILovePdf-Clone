import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        
        navigate("/home");
    }

    return (
        <div>
            <form onSubmit={handleChange}>
                <label>Username</label>
                <input placeholder="username" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <label>Password</label>
                <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <button >Submit</button>
            </form>
        </div>
    )
}

export default Login