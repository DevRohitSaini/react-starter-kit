import React, { lazy } from 'react';
import Loadable from '../component/Loadable';
import UserList from '../views/UserList';
import AddEmployee from '../views/AddEmployee';
import ProtectedRoutes from './ProtectedRoutes';
import Profile from '../views/Profile';
import EditProfile from '../views/EditProfile'; 
import EmployeeDashboard from '../views/EmployeeDashboard'; 
import EmployeeAttandance from '../views/EmployeeAttandance';
import AdminAttandance from '../views/AdminAttandance';
import EmployeeLeave from '../views/EmployeeLeave';
import AdminLeave from '../views/AdminLeave';
import AdminDashboard from '../views/AdminDashboard';
import HolidayAdd from '../views/HolidayAdd';

//const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));
const AuthErrorPage = Loadable(lazy(() => import('../views/ErrorPage')));

const role = JSON.parse(localStorage.getItem('role'));
console.log('main route role=>',role);
// ==============================|| MAIN ROUTES ||============================== //
const MainRoutes = {
  path: '/',
  element: <ProtectedRoutes />,
  children: [
    // { path: '/', element: <DashboardDefault /> },
    // { path: '/users', element: <UserList /> },
    // { path: '/user-details/', element: <AddEmployee /> },
    // { path: '/user-details/:userId', element: <AddEmployee /> },
    // { path: '/profile', element: <Profile /> },
    // { path: '/edit-profile', element: <EditProfile /> },
    // { path: '/employee-dashboard', element: <EmployeeDashboard /> },
    // { path: '/employee-attandance', element: <EmployeeAttandance /> },
    // { path: '/admin-attandance', element: <AdminAttandance /> },
    // { path: '/employee-leave', element: <EmployeeLeave /> }

    { path: '/', element: role == 'admin' ? <AdminDashboard /> : <EmployeeDashboard /> },   
    { path: '/users', element: role == 'admin' ? <UserList /> : <AuthErrorPage /> },
    { path: '/user-details', element: role == 'admin' ? <AddEmployee /> : <AuthErrorPage /> },   
    { path: '/user-details/:userId', element: role == 'admin' ? <AddEmployee /> : <AuthErrorPage /> },    
    { path: '/attandance-report', element: role == 'admin' ? <AdminAttandance /> : <AuthErrorPage /> },
    { path: '/leave-applications', element: role == 'admin' ? <AdminLeave /> : <AuthErrorPage /> },    
    { path: '/company-holidays', element: role == 'admin' ? <HolidayAdd /> : <AuthErrorPage /> },

    { path: '/profile', element: <Profile /> },    
    { path: '/edit-profile', element: <EditProfile /> },       
    
    { path: '/attandance', element: role == 'employee' ? <EmployeeAttandance /> : <AuthErrorPage /> },
    { path: '/leaves', element: role == 'employee' ? <EmployeeLeave /> : <AuthErrorPage /> }  
    
  ]
};
export default MainRoutes;
