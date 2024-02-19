import { combineReducers } from 'redux';
import cartReducer, { CartState } from './cartSlice';
import menuReducer, { MenuState } from './menuSlice';
import userReducer, { UserState } from './userSlice';

export interface RootState {
  menu: MenuState;
  user: UserState;
  cart: CartState;
}

export const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  user: userReducer
});

export default rootReducer;
