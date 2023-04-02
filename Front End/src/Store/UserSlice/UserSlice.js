import { createSlice } from "@reduxjs/toolkit";




export const UserSlice =  createSlice({
          name:"user",
          initialState:{
                    isAuthenticated:false,
                    user:[],
          },
          reducers:{
                    getLoginUser:(state, action)=>{
                              state.isAuthenticated =  true;
                              state.user = action.payload;
                    }
          }
});

// export actions
export const  {getLoginUser } = UserSlice.actions;

// export default user slice
export default UserSlice.reducer;