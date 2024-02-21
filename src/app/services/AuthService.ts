// menuService.js
import { FieldValues } from 'react-hook-form';
import { defer, from } from 'rxjs';
import { get, post } from './ApiClient'; 

// Define the endpoint for fetching menu data
const LOGIN_ENDPOINT = 'account/login/';
const REGISTER_ENDPOINT = 'account/register/';
const CURRENT_USER_ENDPOINT = 'account/currentUser/';

// Function to fetch menu data using your API client
export const accountLogin = (credentials: FieldValues) => {
    return defer(() => from(post<any>(LOGIN_ENDPOINT, credentials)));
};

export const accountRegister = (registrationData: FieldValues) => {
    return defer(() => from(post<any>(REGISTER_ENDPOINT, registrationData)));
}

export const getCurrentUser = () => {
    return defer(() => from(get(CURRENT_USER_ENDPOINT)));
}
