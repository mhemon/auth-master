import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext)

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;