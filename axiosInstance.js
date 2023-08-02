import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const webUrl = process.env.NEXT_PUBLIC_WEB_URL;

const axiosInstance = axios.create({
  // Set the base URL for your API
 // baseURL: 'http://localhost:3001/api/v1',
 baseURL: apiUrl,
  // You can add other axios configurations here
});

// Attach the authorization header to every request
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    console.log("token "+token);
  const authToken = token; // Replace with your actual authorization token
 // config.headers.Authorization = 'Bearer ${authToken}';
 config.headers.Authorization = 'Bearer '+authToken;
 console.log("config file is "+config);
  return config;
});

export default axiosInstance;