import { SET_AUTH_TOKEN } from "../actions/authActions";

// Initial state
const initialState = {
  token: {}, // Initial state for auth data
};
  
// Reducer function
const authReducer = (state = initialState, action: { type: any; payload: any; }) => {
    console.log(action.type)
    switch (action.type) {
        case SET_AUTH_TOKEN:
            console.log('test');
            return {
                ...state,
                token: action.payload, // Update menu data in the state
            };
        default:
            return state;
    }
};

export default authReducer;
