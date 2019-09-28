import axios from 'axios';
import { restURL } from './baseURL';
import history from '../utils/browserHistory';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/constants";

axios.interceptors.request.use( config => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
}, error => {
    return Promise.reject(error);
});

export default axios;