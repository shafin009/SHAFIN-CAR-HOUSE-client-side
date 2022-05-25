import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Hooks/Loading';
import useAdmin from '../../../Hooks/useAdmin';




const RequireAdmin = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const [admin, adLoading] = useAdmin(user)
    const location = useLocation();

    if (loading || adLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace />;

    }



    return children;
};

export default RequireAdmin;