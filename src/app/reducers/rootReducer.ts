import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import menuReducer from './menuReducer';


const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  auth: authReducer
});

export default rootReducer;