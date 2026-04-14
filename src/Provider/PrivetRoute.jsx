import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivetRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>;
    }
    else if (user && user?.email) {
        return children;
    }
    else return <Navigate to='/auth/login'></Navigate>

};

export default PrivetRoute;