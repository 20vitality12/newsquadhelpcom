import axios from '../interceptor'
import { restURL } from '../baseURL';

export const signUp = (data) => axios.post(`${restURL}/user/create`, data);
export const login = (data) => axios.post(`${restURL}/user/login`, data);
export const getUserByAccessToken = (token) => axios.post(`${restURL}/user/get-user`, token);
export const switchUserStatus = (data) => axios.post(`${restURL}/user/switch-user-status`, data);
export const updateFullName = (data) => axios.post(`${restURL}/user/update-user-full-name`, data);
export const updateAboutMe = (data) => axios.post(`${restURL}/user/update-user-about-me`, data);
export const getUsers = () => axios.get(`${restURL}/user/get-users`);
export const getUserData = () => axios.get(`${restURL}/user/get-user-data`);