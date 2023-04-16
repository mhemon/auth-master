import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const {user, logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout()
        .then(() =>{})
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="navbar bg-primary text-primary-content">
            <Link to='/' className="btn btn-ghost normal-case text-xl">Auth Master</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            {
                user ? <>
                    <p>{user.email}</p>
                    <button onClick={handleLogout} className="btn btn-xs">Sign Out</button>
                </> : <Link to='login'>Login</Link>
            }
        </div>
    );
};

export default Header;