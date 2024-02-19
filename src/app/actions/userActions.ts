export const SET_USER_AND_AUTH_TOKEN = 'account/setUserAndAuthToken';

// Action creator function
export const setUserAndAuthToken = (email: any, token: any) => ({
    type: SET_USER_AND_AUTH_TOKEN,
    payload: { email: email, token: token },
});
