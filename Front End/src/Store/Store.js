import  { combineReducers, configureStore  } from '@reduxjs/toolkit';
import SearchSlice from './SearchSlice/SearchSlice';
import PaginationSlice from './PaginationSlice/PaginationSlice';
import CategorySlice from './Category/CategorySlice';
import CartSlice from './CartSlice/CartSlice';


const reducers =  combineReducers({
          searchVal:SearchSlice,
          PaginationSlice,
          category:CategorySlice,
          cart:CartSlice,
})

export const store = configureStore({
          reducer:reducers,
         
})