export const SET_AUTH_TOKEN = 'account/setAuthToken';

// Action creator function
export const setAuthToken = (token: any) => ({
    type: SET_AUTH_TOKEN,
    payload: token,
});
