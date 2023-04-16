import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {

    const {user} = useContext(AuthContext)

    return (
        <div>
            <h3>Home page {user && <p>{user.displayName}</p>}</h3>
        </div>
    );
};

export default Home;