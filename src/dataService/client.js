import axios from 'axios';

console.log('ENV', process.env.REACT_APP_API_BASE_URL);
const client= axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

client.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error.response.data);
    }
);

export default client;