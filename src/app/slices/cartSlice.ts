import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemModel } from '../models/ItemModel';

export interface CartState {
  cart: {};
}

const initialState: CartState = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartData(state, action: PayloadAction<ItemModel>) {
      state.cart = action.payload;
    },
  },
});

export const { setCartData } = cartSlice.actions;

// Export the reducer function
export default cartSlice.reducer;
