import { RootState } from "../slices/rootSlice";

export const isLoggedIn = (state: RootState): boolean => {
  return !!state.user.email && !!state.user.token;
};

export const UserEmail = (state: RootState): string => {
    return state.user.email;
}

export const UserFirstName = (state: RootState): string => {
  return state.user.firstName;
}