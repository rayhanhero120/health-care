import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { user, signInUsingGoogle } = useAuth()
    return (
        <div className="form">
            <div>
                <h2> Login</h2>
                <form onSubmit="">
                    <input className="px-5" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="px-5" type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
                <p>New to Healt Care Agency?<Link to="/register">Create Account </Link></p>
                <div>---------------or---------------</div>
                <button className="btn btn-primary" onClick={signInUsingGoogle}>Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;