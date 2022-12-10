import axios from 'axios';
import localStorageService from './LocalStorageService';

const instance = axios.create({
    // baseURL: 'http://95.216.229.35:8228/institute'
    baseURL: 'http://localhost:8000/user'
    // baseURL: 'https://web.classbridgeapp.com/institute'
});

instance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = localStorageService.getToken();
        config.headers['Auth-type'] = 'token';

        return config;
    },
    error => {
        return error;
    });

export default instance;