import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const {
        signInWithEmail,
        getPassword,
        getEmail,
        setError,
        setUser,
        error,
        setLoading,
    } = useAuth();


    return (
        <div>

            <div className="container-login w-50 mx-auto shadow p-3 m-5 bg-body rounded">
                <h2 className="text-center golden-color">Login</h2>
                <form>

                    <div className="form-floating mt-5 mb-3">
                        <input type="email" name="email" id="floatingInput" placeholder="name@example.com" className="form-control" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name="password" id="floatingPassword" placeholder="Password" className="form-control" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
                <div className="row mb-3 text-danger"></div>
                <br />
                <p>New to red-onion <Link to="/register">Create Your Account</Link></p>
                <div>
                    <p>------------Or----------------</p>
                </div>
                <button className="btn btn-info text-white">Google Sign in</button>
            </div>

        </div>
    );
};

export default Login;