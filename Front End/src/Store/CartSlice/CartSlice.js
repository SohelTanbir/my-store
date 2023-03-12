import { createSlice, createAsyncThunk, current  } from "@reduxjs/toolkit";
import axios from 'axios';



export const loadCartProduct = createAsyncThunk("cart/cartproducts", async ()=>{
          const res =  await  axios.get('http://localhost:5000/api/v1/cart/all');
          const cartProducts =  await res.data
          return cartProducts;
})



const CartSlice =  createSlice({
          name:'cart',
          initialState:{
                    isLoading:false,
                    cartProducts:[],
                    error:""
          },
          reducers:{     
          },
          extraReducers:(builder)=>{
                    builder.addCase(loadCartProduct.pending, (state, action)=>{
                              state.isLoading = true;
                    });
                    builder.addCase(loadCartProduct.fulfilled, (state, action)=>{
                             state.isLoading  = false;
                              state.cartProducts= action.payload;
                              state.error = ""
                    });
                    builder.addCase(loadCartProduct.rejected, (state, action)=>{
                             state.isLoading  = false;
                              state.cartProducts= [];
                              state.error = action.payload;
                    })
          }
});



// export reducer
export default CartSlice.reducer;