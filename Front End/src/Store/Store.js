import  { combineReducers, configureStore  } from '@reduxjs/toolkit';
import SearchSlice from './SearchSlice/SearchSlice';
import PaginationSlice from './PaginationSlice/PaginationSlice';
import CategorySlice from './Category/CategorySlice';


const reducers =  combineReducers({
          searchVal:SearchSlice,
          PaginationSlice,
          category:CategorySlice,
})

export const store = configureStore({
          reducer:reducers,
         
})