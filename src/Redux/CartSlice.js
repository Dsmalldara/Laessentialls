import { createSlice } from "@reduxjs/toolkit";
const initialState = {
productData:[],
userInfo: null,
};
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = state.productData.find((item)=>item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity
            }else
            {
                state.productData.push(action.payload)
            }
        },
        removeFromCart:(state,action)=>{
            state.productData = state.productData.filter(
                (item) => item.id !== action.payload
            )
        },
        clearCart: (state) => {
            state.productData = [];
          },
        incrementQuantity:(state,action)=>{
        const item = state.productData.find(
                (item)=> item.id === action.payload.id 
            );
            if(item){
                item.quantity++
            }
        },
        decreaseQuantity:(state,action)=>{
            const item = state.productData.find((item)=> item.id === action.payload.id)
      if(item.quantity === 1){
            item.quantity =1
          
        }else{
            item.quantity--
        }
    },
    addUser:(state,action)=>{
        state.userInfo = action.payload
    
    },
    removeUser:(state)=>{
        state.userInfo = null
}}
})
export  const {addToCart,removeFromCart,resetCart,clearCart,incrementQuantity,decreaseQuantity, addUser,removeUser} = cartSlice.actions;
export default cartSlice.reducer;