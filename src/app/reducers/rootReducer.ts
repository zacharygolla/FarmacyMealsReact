import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import menuReducer from './menuReducer';


const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  user: userReducer
});

export default rootReducer;