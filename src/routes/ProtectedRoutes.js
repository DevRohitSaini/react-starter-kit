import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/';

const ProtectedRoutes = () => {
    const auth = localStorage.getItem('token');
    return auth ? <MainLayout /> : <Navigate to={'/employee/login'} />;
}

export default ProtectedRoutes;
