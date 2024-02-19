import { RootState } from "../models/RootState";

export const isLoggedIn = (state: RootState): boolean => {
  return !!state.user.email && !!state.user.token;
};

export const UserEmail = (state: RootState): string => {
    return state.user.email;
}