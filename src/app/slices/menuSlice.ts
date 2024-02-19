import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FoodModel } from '../models/FoodModel';

export interface MenuState {
  menu: { [foodId: string]: FoodModel };
}

const initialState: MenuState = {
  menu: {},
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuData(state, action: PayloadAction<{ [foodId: string]: FoodModel }>) {
      state.menu = action.payload;
    },
  },
});

export const { setMenuData } = menuSlice.actions;

// Export the reducer function
export default menuSlice.reducer;
