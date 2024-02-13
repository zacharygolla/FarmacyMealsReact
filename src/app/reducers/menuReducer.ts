import { SET_MENU_DATA } from '../actions/menuActions';
import { MenuState } from '../models/FoodModel';

// Initial state
const initialState = {
  menuData: {}, // Initial state for menu data
};

// Reducer function
const menuReducer = (state = initialState, action: { type: any; payload: any; }): MenuState => {
  switch (action.type) {
    case SET_MENU_DATA:
      return {
        ...state,
        menuData: action.payload, // Update menu data in the state
      };
    default:
      return state;
  }
};

export default menuReducer;