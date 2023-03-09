import  { combineReducers, configureStore  } from '@reduxjs/toolkit';
import SearchSlice from './SearchSlice/SearchSlice';
import PaginationSlice from './PaginationSlice/PaginationSlice';


const reducers =  combineReducers({
          searchVal:SearchSlice,
          PaginationSlice
})

export const store = configureStore({
          reducer:reducers,
         
})