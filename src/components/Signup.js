import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from "../context/notes/NoteContext"

const Signup = () => {
    const context = useContext(NoteContext);
    const { showAlert } = context;

    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name, email, password} = credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json();
        if(json.success){
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            showAlert("Welcome to Notes App", "success");
        }
        else{
            showAlert("Invalid details", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container col-md-6 mt-3'>
            <div className="card">
                <div className="card-header">Sign Up</div>
                <div className="card-body">
                    <form className='g-1' onSubmit={handleSubmit}>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="authName" name='name' onChange={onChange} placeholder="Enter name" required />
                            <label htmlFor="authName" className="form-label">Name</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="email" className="form-control" id="authEmail" name='email' onChange={onChange} placeholder="Enter email" required />
                            <label htmlFor="authEmail" className="form-label">Email address</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="password" className="form-control" id="authPassword" name='password' minLength={8} onChange={onChange} placeholder="Enter password" required />
                            <label htmlFor="authPassword" className="form-label">Password</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="password" className="form-control" id="cauthPassword" name='cpassword' minLength={8} onChange={onChange} placeholder="Confirm password" required />
                            <label htmlFor="cauthPassword" className="form-label">Confirm password</label>
                        </div>
                        <button type="submit" className="btn btn-primary col-md-2 float-end">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup