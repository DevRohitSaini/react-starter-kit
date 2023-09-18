import React from 'react';
import { lazy } from 'react';

// project imports
import Loadable from 'component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = Loadable(lazy(() => import('../views/Login')));
const AuthRegister = Loadable(lazy(() => import('../views/Register')));
const AuthEmpLogin = Loadable(lazy(() => import('../views/EmpLogin')));
const ForgetPassword = Loadable(lazy(() => import('../views/ForgetPassword')));
const AuthUpcomingPage = Loadable(lazy(() => import('../views/UpcomingPage')));
const AuthErrorPage = Loadable(lazy(() => import('../views/ErrorPage')));
const AuthUnauthorisePage = Loadable(lazy(() => import('../views/UnauthorisePage')));

// ==============================|| AUTHENTICATION ROUTES ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/application/login',
      element: <AuthLogin />
    },
    {
      path: '/application/signup',
      element: <AuthRegister />
    },
    {
      path: '/employee/login',
      element: <AuthEmpLogin />
    },
    {
      path: '/employee/forget-password',
      element: <ForgetPassword />
    },
    {
      path: 'upcoming-page',
      element: <AuthUpcomingPage />
    },
    {
      path: '*',
      element: <AuthErrorPage />
    },    
    {
      path: 'unauthorise-page',
      element: <AuthUnauthorisePage />
    } 
    
    
  ]
};

export default AuthenticationRoutes;
