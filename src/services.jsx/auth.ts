import apiClient from './apiClient';

interface AuthResponse {
  access: string;
  refresh: string;
}

export const login = async (
  email: string,
  password: string | number,
  is_partner?: boolean
): Promise<AuthResponse> => {
  const response = await apiClient.post('/login/', {
    email,
    password,
    // is_partner,
  });
  return response.data;
};

export const signup = async (
  full_name: string,
  email: string,
  phone_number: string,
  inn: string,
  password: string,
  is_partner?: boolean
): Promise<AuthResponse> => {
  const response = await apiClient.post('/register/', {
    full_name,
    email,
    inn,
    phone_number,
    password,
    is_partner,
  });
  return response.data;
};

export const getProfile = async () => {
  const response = await apiClient.get('/profile');
  return response.data;
};
