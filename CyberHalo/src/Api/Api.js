import axios from 'axios';

// It is often better to have the base URL without the /api prefix
// This allows you to handle both /api/protected-routes and /auth/public-routes
const api = axios.create({
  baseURL: 'http://localhost:8081/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// A smarter interceptor that only adds the token to protected routes
api.interceptors.request.use(
  (config) => {
    // List of public endpoints that don't need a token.
    // The URLs here should match the relative paths from the base URL.
    const publicEndpoints = ['/auth/signup', '/auth/signin'];
    
    // Check if the request's URL is one of the public endpoints
    const isPublic = publicEndpoints.includes(config.url);
    
    // Get the token from local storage
    const token = localStorage.getItem('jwtToken');
    
    // If the token exists AND the request is not for a public endpoint,
    // add the Authorization header.
    if (token && !isPublic) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    // This is for handling errors before the request is sent
    return Promise.reject(error);
  }
);

export default api;