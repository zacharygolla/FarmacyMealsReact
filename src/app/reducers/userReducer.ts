import { SET_USER_AND_AUTH_TOKEN } from "../actions/userActions";

// Initial state
const initialState = {
  token: '',
  email: '' // Initial state for auth data
};
  
// Reducer function
const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case SET_USER_AND_AUTH_TOKEN:
            return {
                ...state,
                token: action.payload.token,
                email: action.payload.email
            };
        default:
            return state;
    }
};

export default userReducer;
