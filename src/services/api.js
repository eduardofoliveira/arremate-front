import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.31:8000',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    const { status } = response;

    if (status === 401) {
      if (response.data.error) {
        if (response.data.error === 'Token invalid') {
          localStorage.clear();
        }
      }
    }
    return Promise.reject(error);
  }
);

export function clearAll() {
  localStorage.clear();
}

export default api;
