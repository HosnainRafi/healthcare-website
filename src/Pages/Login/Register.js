import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {

    const {
        getEmail,
        getPassword,
        signUpWithEmail,
        getName,
        getPhotoURL,
        setError,
        sendVilifiedEmail,
        setUserName,
        error,
      } = useAuth();

    return (
        <div>

            <div className="container-login w-50 mx-auto shadow p-3 m-5 bg-body rounded">
                <h2>Create Account</h2>
                <form>
                    <div className="form-floating mt-5 mb-3">
                        <input type="text" name="userName" id="floatingInput1" placeholder="Enter Your Name" className="form-control" required/>
                        <label htmlFor="floatingInput1">UserName</label>
                    </div>
                    <div className="form-floating  mb-3">
                        <input type="email" name="email" id="floatingInput" placeholder="name@example.com" className="form-control" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name="password" id="floatingPassword" placeholder="Password" className="form-control" required/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
                <div className="row mb-3 text-danger"></div>
                <br />
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;