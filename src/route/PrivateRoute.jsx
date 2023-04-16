import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='flex items-center justify-center h-screen'>
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;