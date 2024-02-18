// menuService.js
import { get } from './ApiClient'; // assuming your API client file is named apiClient.js

// Define the endpoint for fetching menu data
const MENU_ENDPOINT = '/Foods';

// Function to fetch menu data using your API client
export const fetchMenuData = () => {
  return get<any>(MENU_ENDPOINT);
};
