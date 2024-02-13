// actions/menuActions.js

import { ItemModel } from "../models/ItemModel";

// Action type constant
export const UPDATE_CART_SINGLE_FOOD = 'cart/updateCartData';

// Action creator function
export const updateCartData = (cartData: ItemModel) => ({
  type: UPDATE_CART_SINGLE_FOOD,
  payload: cartData,
});