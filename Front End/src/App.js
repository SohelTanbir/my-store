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
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/product">
                <Product/>
            </Route>
            <Route path="/reviews">
                <Reviews/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/signup">
                <SignUp/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/orders/trace">
              <TraceOrder/>
            </Route>
            <Route path="/details/:id">
              <ProductDetails/>
            </Route>
            <Route path="/addproduct">
                <AddProduct/>
            </Route>
          </Switch>
     </Router>
     </userContext.Provider>
    </div>
  );
}

export default App;