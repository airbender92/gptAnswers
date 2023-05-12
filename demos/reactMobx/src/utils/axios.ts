import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api"
});

// Request interceptor for API calls
apiClient.interceptors.request.use(
  (config) => {
    const timestamp = new Date().getTime();
    config.headers.timestamp = timestamp;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for API calls
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = 'Bad Request';
          break;
        case 401:
          error.message = 'Unauthorized';
          break;
        case 404:
          error.message = "Not Found";
          break;
        default:
          error.message = 'Something went wrong'
      }
    } else {
      error.message = 'Network Error'
    }

    return Promise.reject(error);
  }
);

// Timeout handler for API calls
const TIMEOUT = 5000;
apiClient.defaults.timeout = TIMEOUT;

// Request cancellation handler for API calls
const cancelTokenSource = axios.CancelToken.source();

export { apiClient, cancelTokenSource };
