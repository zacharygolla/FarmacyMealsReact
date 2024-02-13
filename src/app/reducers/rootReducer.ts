import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import menuReducer from './menuReducer';


const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer
});

export default rootReducer;