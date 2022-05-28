import React from 'react'

const Signup = () => {
    return (
        <div className='container col-md-6'>
            <div className="card">
                <div className="card-header">Sign Up</div>
                <div className="card-body">
                    <form className='row g-1'>
                        <div className="form-floating mb-2 col-md-6 pe-1">
                            <input type="text" className="form-control" id="authfn" placeholder="Enter first name" required />
                            <label htmlFor="authfn" className="form-label">First name</label>
                        </div>
                        <div className="form-floating mb-2 col-md-6 ps-1">
                            <input type="text" className="form-control" id="authln" placeholder="Enter last name" required />
                            <label htmlFor="authln" className="form-label">Last name</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="email" className="form-control" id="authEmail" placeholder="Enter email" required />
                            <label htmlFor="authEmail" className="form-label">Email address</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="password" className="form-control" id="authPassword" placeholder="Enter password" required />
                            <label htmlFor="authPassword" className="form-label">Password</label>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-primary float-end">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Signup