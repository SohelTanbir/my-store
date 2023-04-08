import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadLoggedInUserData = createAsyncThunk('user/loggedinuser', async()=>{
          const response = await fetch("http://localhost:5000/api/v1/users/me",{
                    credentials:'include'
          });
          const    {success, user}=  await response.json();
          return {success, user}
       
})



export const UserSlice =  createSlice({
          name:"user",
          initialState:{
                    isAuthenticated:false,
                    user:[],
          },
          reducers:{
                    getLoginUser:(state, action)=>{
                              state.isAuthenticated =  action.payload.isLogin;
                              state.user = action.payload.user;
                    },
                    resetLogggedinUser:(state, action) =>{
                              state.isAuthenticated  = false;
                              state.user = [];
                    }
          },
          extraReducers:(builder)=>{
                    builder.addCase(loadLoggedInUserData.fulfilled, (state, action)=>{
                           state.isAuthenticated = action.payload.success?action.payload.success:false;
                           state.user = action.payload.user? action.payload.user:[]
                    })
          }
});

// export actions
export const  {getLoginUser, resetLogggedinUser } = UserSlice.actions;

// export default user slice
export default UserSlice.reducer;