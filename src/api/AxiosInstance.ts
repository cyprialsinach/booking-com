import axios, { AxiosResponse, AxiosError } from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = process.env.REACT_APP_AI_HOST;

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-rapidapi-key": API_KEY, 
    "x-rapidapi-host": API_HOST, 
  },
});

// Function to log API calls
function logApiCall(res: AxiosResponse | AxiosError) {
  const url = res?.config?.url?.replace(BASE_URL!, "api") || "Unknown URL";
  const status = res instanceof AxiosError ? res.response?.status : res.status;
  const message =
    res instanceof AxiosError ? "Request failed" : "Request successful";

  if (status && status >= 500) {
    console.warn(`${url} => ${status}: ${message}`);
  } else {
    console.info(`${url} => ${status}: ${message}`);
  }
}

// Interceptor for logging and handling responses
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    logApiCall(response);
    return response;
  },
  (error: AxiosError) => {
    logApiCall(error);
    return Promise.reject(error?.response?.data || error.message);
  }
);

export default axiosInstance;
