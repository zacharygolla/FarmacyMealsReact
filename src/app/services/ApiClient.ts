import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

const BASE_URL = 'https://localhost:5001/api';

export interface ApiResponse<T = any> {
    data: T;
    status: number;
    // ... other fields as needed
  }

// Create a reusable Axios instance with a base URL
const api = axios.create({
  baseURL: BASE_URL,
});

// Example function to make a GET request
export const get = <T>(endpoint: string, config?: AxiosRequestConfig): Observable<ApiResponse<T>> => {
    return new Observable((observer) => {
      api.get<T>(endpoint, config)
        .then((response: AxiosResponse<T>) => {
          observer.next({
            data: response.data,
            status: response.status,
            // ... other fields as needed
          });
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  };

  export const post = <T>(endpoint: string, data: any, config?: AxiosRequestConfig): Observable<ApiResponse<T>> => {
    return new Observable((observer) => {
      api.post<T>(endpoint, data, config)
        .then((response: AxiosResponse<T>) => {
          observer.next({
            data: response.data,
            status: response.status,
            // ... other fields as needed
          });
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  };
