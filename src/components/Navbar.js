import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom'

import {
    Link
  } from "react-router-dom";

export const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate('/login');
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Hearnable</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/details">Details</Link>
                    </div>                
                </div>

                
                    {!localStorage.getItem('token') ? 
                    <form>
                        <Link type="button" className="btn btn-primary mx-1" to="/login">Login</Link>
                        <Link type="button" className="btn btn-secondary mx-1" to="/signup" >Signup</Link>
                    </form>
                    :<button onClick={handleLogout} type="button" className="btn btn-danger mx-1" to="/logout" >Logout</button>}

            </div>
        </nav>
    </>
  )
}

export default Navbar;