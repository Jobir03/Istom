import axios from 'axios';
// export const BASE_URL = "http://213.139.211.234:8000/";
export const BASE_URL = 'https://api.istombroker.ru/';
export const BASE_URL_IMG = 'https://api.istombroker.ru';

export const GetData = async (url: string) => {
  const response = await axios.get(BASE_URL + url);
  return response.data;
};

export const GetDataToken = async (url: string) => {
  const Token = localStorage.getItem('token');
  const response = await axios.get(BASE_URL + url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    },
  });
  return response.data;
};

export const PostData = async (url: string, data: object) => {
  const res = await axios.post(BASE_URL + url, data);
  return res.data;
};

export const PostDataToken = async (url: string, data: any) => {
  const Token = localStorage.getItem('token');
  const response = await axios.post(BASE_URL + url, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    },
  });
  return response;
};

export const PostDataTokenFormData = async (url: string, data: any) => {
  const Token = localStorage.getItem('token');
  const response = await axios.post(BASE_URL + url, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${Token}`,
    },
  });
  return response;
};
