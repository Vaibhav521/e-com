import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalAmount: 0, 
};

const cartSlice = createSlice({
  name: 'cart', 
  initialState, 
  reducers: {

    addItemToCart(state, action) {
      state.items.push(action.payload);
    },
    
    removeItemFromCart(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
