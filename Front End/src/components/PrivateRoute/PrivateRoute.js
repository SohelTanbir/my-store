import  { React } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  const {isAuthenticated, user} = useSelector(state => state.user);
  const routeName = window.location.pathname;
  const url = `/login?intended=${routeName} `


    return isAuthenticated && user?.email? children : <Navigate to={url}/>
    
};

export default PrivateRoute;