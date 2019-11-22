import axios from 'axios';
import { restURL } from './baseURL';
import history from '../utils/browserHistory';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/constants";
import { setTokens } from "../utils/setTokens";

axios.interceptors.request.use( config => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => response, async error => {
    const {response: {config}} = error;
    switch (error.response.status) {
        case 401:
            localStorage.clear();
            history.push('./login');
            break;
        case 403:
            const refreshTokenFromLS = localStorage.getItem(REFRESH_TOKEN);
            const { data } = await axios.post(`${restURL}/user/refresh`,
                {refreshToken: refreshTokenFromLS}).catch(err => {
                localStorage.removeItem(ACCESS_TOKEN);
                localStorage.removeItem(REFRESH_TOKEN);
                return Promise.reject(err);
            });
            const { accessToken }  = data;
            setTokens(data.tokens);
            config.headers['Authorization'] = `Bearer ${accessToken}`;

            return axios(config);
        default: break;
    }
    return Promise.reject(error);
});

export default axios;