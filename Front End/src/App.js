import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Reviews from './components/Reviews/Review';
import Contact from './components/Contact/Contact';
import TraceOrder from './components/TraceOrder/TraceOrder';
import ForgotPassword from './components/ResetPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import UserProfile from './components/UserProfile/UserProfile';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
import UpdateProduct from './components/Dashboard/UpdateProduct/UpdateProduct';
import Users from './components/Dashboard/Users/Users.js';
import Orders from './components/Dashboard/Orders/Orders';
import UpdateOrder from './components/Dashboard/UpdateOrder/UpdateOrder';
import NotFound from './components/NotFount/NotFound';
import Category from './components/Dashboard/Category/Category';
import Messages from './components/Dashboard/Messages/Messages';
import OrderSuccess from './components/OrderSuccess/OrderSuccess'
import Shipment from './components/Shipment/Shipment';
import StripePayment from './components/StripePayment/StripePayment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();




function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [payment, setPayment] = useState(0)
  const [quantity, setQuantity] = useState(0);
  const [order, setOrder] = useState([]);




  return (
    <div className="App">
      <userContext.Provider value={{cartItems:[cart, setCart], userData:[loggedInUser, setLoggedInUser], prices:[price, setPrice],
      quantities:[quantity, setQuantity],
      paymentInfo:[payment, setPayment],
      ordersInfo: [order, setOrder]
       }}>

      <BrowserRouter>
                                                                                                                      
            <Routes>
              <Route exact path="/" element={<Home/>}>
                  
              </Route>
              <Route exact path="/home" element={  <Home/>} />
                
              <Route exact path="/product" element={   <Product/>} />
               
              <Route exact path="/reviews" element={ <Reviews/>} />
                 

              <Route exact path="/login" element={<Login/>} />
       
              <Route exact path="/signup" element={<SignUp/>} />
               

              <Route exact path="/dashboard" element={<PrivateRoute><Dashboard/> </PrivateRoute>} />

              <Route exact path="/cart" element={ <Cart/>} />

              <Route exact path="/contact" element={  <Contact/>} />
              
              <Route exact path="/orders/track" element={   <TraceOrder/>} />

              <Route exact path="/password/forgot" element={<ForgotPassword/>} />
          
              <Route exact path="/password/reset/:token" element={<ResetPassword/>} />
                
              <Route exact path="/details/:id" element={<ProductDetails/>} />

              <Route exact  path="/products/addproduct" element={<AddProduct/>} /> 

              <Route exact path="/products/manage" element={<ManageProducts/>} />

              <Route exact path="/products/update/:id" element={<UpdateProduct/>} />

              <Route  exact path="/admin/users" element={<Users/>} />

              <Route exact  path="/orders/all" element={<Orders/>} />

              <Route exact  path="/orders/status/update" element={<UpdateOrder/>} />
              <Route exact  path="/orders/create/confirm/message" element={<OrderSuccess/>} />

              <Route exact  path="/checkout" element={<Shipment/>} />

              <Route exact  path="/stripe/payment" element={<StripePayment/>} />

              <Route exact  path="/category/all" element={  <Category/>} />
              
              <Route exact  path="/users/message" element={  <Messages/>} />

              <Route exact path="/users/profile" element={   <UserProfile/>} />

              <Route exact path="*" element={<NotFound/>} />

            </Routes>
      </BrowserRouter>
     </userContext.Provider>
    </div>
  );
}

export default App;
