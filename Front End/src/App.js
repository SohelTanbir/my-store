import React, { createContext, useState } from 'react'
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


import Dashboard from './components/Dashboard/Dashboard';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Reviews from './components/Reviews/Review';
import Contact from './components/Contact/Contact';
import TraceOrder from './components/TraceOrder/TraceOrder';
import ResetPassword from './components/ResetPassword/ResetPassword';
import SetNewPassword from './components/ResetPassword/SetNewPassword';
import OrderStatus from './components/TraceOrder/OrderStatus';
import UserProfile from './components/UserProfile/UserProfile';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
import UpdateProduct from './components/Dashboard/UpdateProduct/UpdateProduct';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Orders from './components/Dashboard/Orders/Orders';
import UpdateOrder from './components/Dashboard/UpdateOrder/UpdateOrder';
import NotFound from './components/NotFount/NotFound';
import Category from './components/Dashboard/Category/Category';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([]);
  const [payment, setPayment]= useState({});
  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser, setLoggedInUser], [cart, setCart],[payment, setPayment]}>

     <Router>
     <Header/>                                                                                                                                     
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/home">
                <Home/>
            </Route>
            <Route exact path="/product">
                <Product/>
            </Route>
            <Route exact path="/reviews">
                <Reviews/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>
            <Route exact path="/dashboard">
                <Dashboard/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/orders/track">
              <TraceOrder/>
            </Route>
            <Route exact path="/orders/order-status">
              <OrderStatus/>
            </Route>
            <Route exact path="/password/reset-password">
              <ResetPassword/>
            </Route>
            <Route exact path="/password/new-password">
              <SetNewPassword/>
            </Route>
            <Route exact path="/details/:id">
              <ProductDetails/>
            </Route>
            <Route exact  path="/products/addproduct">
                <AddProduct/>
            </Route>
            <Route exact path="/products/manage">
                <ManageProducts/>
            </Route>
            <Route exact path="/products/update">
                <UpdateProduct/>
            </Route>
            <Route  exact path="/admin/make-admin">
                <MakeAdmin/>
            </Route>
            <Route exact  path="/orders/all">
                <Orders/>
            </Route>
            <Route exact  path="/orders/status/update">
                <UpdateOrder/>
            </Route>
            <Route exact  path="/category/all">
                <Category/>
            </Route>
            <Route exact path="/users/profile">
                <UserProfile/>
            </Route>
            <Route exact path="*">
                <NotFound/>
            </Route>
          </Switch>
     </Router>
     </userContext.Provider>
    </div>
  );
}

export default App;
