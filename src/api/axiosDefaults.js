import axios from "axios";

axios.defaults.baseURL = 'https://with-travel-in-mind-api-a2180400f610.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();