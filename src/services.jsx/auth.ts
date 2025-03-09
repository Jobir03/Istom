import apiClient from './apiClient';

interface AuthResponse {
  access: string;
  refresh: string;
}

export const login = async (
  login: string,
  password: string | number,
  is_partner?: boolean
): Promise<AuthResponse> => {
  const response = await apiClient.post('/auth/login', {
    login,
    password,
    is_partner,
  });
  return response.data;
};

export const getProfile = async () => {
  const response = await apiClient.get('/profile');
  return response.data;
};
