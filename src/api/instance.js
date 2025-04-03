import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://httpbin.org',
  headers: {
    'Content-Type': 'application/json',
  },
});
