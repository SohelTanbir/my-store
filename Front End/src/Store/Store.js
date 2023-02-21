import  { configureStore  } from '@reduxjs/toolkit';
import SearchSlice from './SearchSlice/SearchSlice';





export const store = configureStore({
          reducer:SearchSlice
})