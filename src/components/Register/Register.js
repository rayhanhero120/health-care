import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Create Acoount</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Enter Password" />
                    <br />
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>

                <p>Already have an account?<Link to="/login">Login</Link></p>
                <div>---------------or---------------</div>
                <button className="btn btn-primary">Google Sign in</button>

            </div>
        </div>
    );
};

export default Register;