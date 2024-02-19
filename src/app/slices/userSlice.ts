import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  token: string;
}

const initialState = {
    token: '',
    email: '' // Initial state for auth data
  };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<{ token: string, email: string }>) {
      state.token = action.payload.token,
      state.email = action.payload.email
    },
  },
});

export const { setUserData } = userSlice.actions;

// Export the reducer function
export default userSlice.reducer;
