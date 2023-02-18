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
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Orders from './components/Dashboard/Orders/Orders';
import UpdateOrder from './components/Dashboard/UpdateOrder/UpdateOrder';
import NotFound from './components/NotFount/NotFound';
import Category from './components/Dashboard/Category/Category';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [payment, setPayment] = useState(0)
  const [quantity, setQuantity] = useState(0);
  const [order, setOrder] = useState([]);


  // load cart from DB
const loadCartProduct = async()=>{
    const response = await fetch("http://localhost:5000/api/v1/cart/all");
    const {cartProducts} =  await response.json();
    if(cartProducts?.length > 0){
        setCart(cartProducts)
    }
}
useEffect(()=>{
  loadCartProduct();
},[cart.length])

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
                 

              <Route exact path="/login" element={loggedInUser.name?<Home/>:<Login/>} />
       
              <Route exact path="/signup" element={<SignUp/>} />
               

              <Route exact path="/dashboard" element={<Dashboard/>} />

              <Route exact path="/cart" element={ <Cart/>} />

              <Route exact path="/contact" element={  <Contact/>} />
              
              <Route exact path="/orders/track" element={   <TraceOrder/>} />

              <Route exact path="/password/forgot" element={<ForgotPassword/>} />
          
              <Route exact path="/password/reset/:token" element={<ResetPassword/>} />
                
              <Route exact path="/details/:id" element={<ProductDetails/>} />

              <Route exact  path="/products/addproduct" element={<AddProduct/>} /> 

              <Route exact path="/products/manage" element={<ManageProducts/>} />

              <Route exact path="/products/update/:id" element={<UpdateProduct/>} />

              <Route  exact path="/admin/make-admin" element={<MakeAdmin/>} />

              <Route exact  path="/orders/all" element={<Orders/>} />

              <Route exact  path="/orders/status/update" element={<UpdateOrder/>} />

              <Route exact  path="/category/all" element={  <Category/>} />

              <Route exact path="/users/profile" element={   <UserProfile/>} />

              <Route exact path="*" element={<NotFound/>} />

            </Routes>
      </BrowserRouter>
     </userContext.Provider>
    </div>
  );
}

export default App;
