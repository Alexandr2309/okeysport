import axios from 'axios';
import { USER_LOCALSTORAGE_ITEM } from 'shared/const/local-storage';

export const $api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_ITEM),
  },
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization =
      localStorage.getItem(USER_LOCALSTORAGE_ITEM) || '';
  }
  return config;
});
