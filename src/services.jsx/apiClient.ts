import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';

// Set the base URL for the API from environment variables
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Create an axios instance with default headers and base URL
const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Allows sending cookies (important for HttpOnly refresh token)
});

// Function to refresh the access token using the refresh token (handled via HttpOnly cookies)
const refreshToken = async () => {
  try {
    // Send a request to refresh the token (server should use HttpOnly cookie)
    const response = await axios.post(
      `${baseURL}/token/refresh/`,
      {},
      { withCredentials: true }
    );

    // Extract the new access token from the response
    const { token } = response.data;

    // Store the new token in cookies for client-side use (but not refresh_token!)
    Cookies.set('token', token, { secure: true, sameSite: 'Strict' });

    return token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Error refreshing token:',
        error.response?.data || error.message
      );
    } else {
      console.error('Error refreshing token:', error);
    }
    throw error;
  }
};

// Request interceptor to add the Authorization header with the access token
apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token expiration and refresh if necessary
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url.includes('/account/signin/')) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return apiClient(originalRequest);
      } catch (err) {
        console.error('Token refresh failed, redirecting to login...');

        Cookies.remove('token');

        if (typeof window !== 'undefined') {
          Router.push('/login');
        }

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
