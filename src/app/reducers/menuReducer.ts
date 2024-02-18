import { SET_MENU_DATA } from '../actions/menuActions';
import { FoodModel } from '../models/FoodModel';

// Initial state
const initialState = {
  menu: {}, // Initial state for menu data
};

export interface MenuState {
  menu: { [foodId: string]: FoodModel };
}

// Reducer function
const menuReducer = (state = initialState, action: { type: any; payload: any; }): MenuState => {
  switch (action.type) {
    case SET_MENU_DATA:
      return {
        ...state,
        menu: action.payload, // Update menu data in the state
      };
    default:
      return state;
  }
};

export default menuReducer;