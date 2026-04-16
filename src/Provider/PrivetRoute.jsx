import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>;
    }
    else if (user && user?.email) {
        return children;
    }
    else return <Navigate state={location.pathname} to='/auth/login'></Navigate>

};

export default PrivetRoute;