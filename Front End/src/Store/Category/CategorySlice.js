import { createSlice } from "@reduxjs/toolkit";






const CategorySlice =  createSlice({
          name:'category',
          initialState:{
                    category:"",
          },
          reducers:{
                    getCategory:(state, action)=>{
                              state.category =  action.payload;
                              console.log(state);
                    } 
          }
          
});


// export actions
export const { getCategory } = CategorySlice.actions;

// export default  reducer
export default CategorySlice.reducer;