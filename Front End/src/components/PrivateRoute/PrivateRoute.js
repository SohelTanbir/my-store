import  { React } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  const {isAuthenticated, user} = useSelector(state => state.user);
  const routeName = window.location.pathname;
  const url = `/login?intended=${routeName} `;

  const loggedInUser =  localStorage.getItem("user").length > 0? JSON?.parse( localStorage?.getItem("user")) : user

  if(routeName === '/dashboard'){
    return loggedInUser.role ==='admin' ? children  :<Navigate to="/" /> 
  }
  return isAuthenticated && user?.email? children : <Navigate to={url}/>
};

export default PrivateRoute;