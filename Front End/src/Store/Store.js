import  { combineReducers, configureStore  } from '@reduxjs/toolkit';
import SearchSlice from './SearchSlice/SearchSlice';
import PaginationSlice from './PaginationSlice/PaginationSlice';
import CategorySlice from './Category/CategorySlice';
import CartSlice from './CartSlice/CartSlice';
import OrderSlice from './OrderSlice/OrderSlice';


const reducers =  combineReducers({
          searchVal:SearchSlice,
          PaginationSlice,
          category:CategorySlice,
          cart:CartSlice,
          newOrder: OrderSlice
})

export const store = configureStore({
          reducer:reducers,
         
})