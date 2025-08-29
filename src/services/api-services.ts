/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf8',
    Accept: 'application/json-patch+json, text/javascript, */*; q=0.01',
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 30000,
  timeoutErrorMessage: 'ExpiredTime',
  validateStatus(status: number) {
    return status >= 200 && status < 300;
  },
});


export default axiosInstance;
