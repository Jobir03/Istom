import apiClient from './apiClient';

export const getCatalogs = async () => {
  const response = await apiClient.get('/categories');
  return response.data;
};
