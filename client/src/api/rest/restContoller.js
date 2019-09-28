import axios from '../interceptor'
import { restURL } from '../baseURL';

export const signUp = (data) => axios.post(`${restURL}/user/create`, data);
export const login = (data) => axios.post(`${restURL}/user/login`, data);
export const refresh = (token) => axios.post(`${restURL}/user/refresh`, token);
export const getUserByAccessToken = (token) => axios.post(`${restURL}/user/get-user`, token);