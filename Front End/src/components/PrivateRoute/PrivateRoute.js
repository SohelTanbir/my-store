import  { React } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {isAuthenticated, user} = useSelector(state => state.user);


    return isAuthenticated && user?.email? children : <Navigate to="/login"/>
    
};

export default PrivateRoute;