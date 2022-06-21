import axios from "axios";
import { setCookie, getCookie } from '../../Cookie';

// 1. Axios instance생성
const api = axios.create({
    baseURL: "http://13.209.88.160:8080"
})

// 2. request interceptor
api.interceptors.request.use(
    config => {
        const token = getCookie("token");
        config.headers.Authorization = token;
        return config;
    },
    error => {
        console.log(error);
    }
)

// 3. response interceptor
api.interceptors.response.use(
    response => {
        setCookie("token", response.headers.authorization)
        return response;
    },
    error => {
        console.log(error);
    }
);

// 4. 인스턴스 내보내기
export default api;
