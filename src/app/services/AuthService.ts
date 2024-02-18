// menuService.js
import { get, post } from './ApiClient'; // assuming your API client file is named apiClient.js

// Define the endpoint for fetching menu data
const LOGIN_ENDPOINT = 'account/login/';
const REGISTER_ENDPOINT = 'account/register/';
const CURRENT_USER_ENDPOINT = 'account/currentUser/';

// Function to fetch menu data using your API client
export const accountLogin = (credentials: { email: string; password: string; }) => {
    return post<any>(LOGIN_ENDPOINT, credentials);
};

export const accountRegister = () => {
    return post<any>(REGISTER_ENDPOINT, {});
}

export const getCurrentUser = () => {
    return get(CURRENT_USER_ENDPOINT);
}
