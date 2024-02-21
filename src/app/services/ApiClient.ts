import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://localhost:5001/api';

export interface ApiResponse<T = any> {
  data?: T;
  status?: number;
  error?: unknown;
  // ... other fields as needed
}

// Create a reusable Axios instance with a base URL
const api = axios.create({
  baseURL: BASE_URL,
});

// Example function to make a GET request
export const get = async <T>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  try {
    const response = await api.get<T>(endpoint, config);
    return {
      data: response.data,
      status: response.status,
    };
  }
  catch (error: any) {
    throw error;
  }
};

export const post = async <T>(endpoint: string, data: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  try {
    const response = await api.post<T>(endpoint, data, config);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error: any) {
    throw error;
  }
};
