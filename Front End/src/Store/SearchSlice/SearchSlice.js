import { createSlice } from "@reduxjs/toolkit";






const SearchSlice =  createSlice({
          name:'search',
          initialState:{
                    searchVal:"",
                    category:"",
          },
          reducers:{
                    getSearchInputVal: (state, action)=>{
                              state.searchVal = action.payload;
                    },
                    getCategory:(state, action)=>{
                              state.category =  action.payload;
                              console.log(state);
                    } 
          }
          
});


// export actions
export const { getSearchInputVal, getCategory } = SearchSlice.actions;

// export default  reducer
export default SearchSlice.reducer;