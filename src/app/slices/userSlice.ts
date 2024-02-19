import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  firstName: string;
  email: string;
  token: string;
}

const initialState: UserState = {
  firstName: '',
  token: '',
  email: '' // Initial state for auth data
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<{ firstName: string, token: string, email: string }>) {
      state.firstName = action.payload.firstName;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
  },
});

export const { setUserData } = userSlice.actions;

// Export the reducer function
export default userSlice.reducer;
