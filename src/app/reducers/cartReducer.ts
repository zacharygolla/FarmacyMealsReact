import { UPDATE_CART_SINGLE_FOOD } from "../actions/cartActions";

// Initial state
const initialState = {
  cartData: [], // Initial state for menu data
};

// Reducer function
const cartReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case UPDATE_CART_SINGLE_FOOD:
      return {
        ...state,
        cartData: action.payload, // Update menu data in the state
      };
    default:
      return state;
  }
};

export default cartReducer;

// import { ItemModel } from "../models/ItemModel";

// // Initial state
// const initialState = {
//     cartData: ""
// };

// // Reducer function
// const cartReducer = (state = initialState, action: { type: any; payload: { item: ItemModel; }; }) => {
//     switch (action.type) {
//         case 'UPDATE_CART_SINGLE_FOOD':
//             // Find the index of the item to update in the cartData array

//             //{ key: itemType, value: any (for food updates any will be { key: foodId, value: Food [] })}
//             const indexToUpdate = state.cartData.findIndex(item => item.foodId === action.payload.foodId);

//             if (indexToUpdate !== -1) {
//                 // If the item is found, update it
//                 const updatedCartData = [...state.cartData];
//                 updatedCartData[indexToUpdate] = action.payload;

//                 return {
//                     ...state,
//                     cartData: updatedCartData,
//                 };
//             } else {
//                 // If the item is not found, add it to the array
//                 return {
//                     ...state,
//                     cartData: [...state.cartData, action.payload],
//                 };
//             }
//         default:
//             return state;
//     }
// };

// export default cartReducer;