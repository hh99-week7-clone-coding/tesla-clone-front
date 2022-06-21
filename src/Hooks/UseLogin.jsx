import { useMutation } from 'react-query';
// import Axios Instance
import apis from "../api/main";
import { setCookie } from '../Cookie';

const login = async (data) => {
    await apis.login(data);
}

const UseLogin = () => {
    return useMutation(login, {
        onSuccess : (data, variable, context) => {
            console.log("로그인 성공!")  // 콘솔 찍힘
        },
        onError : (error) => {
            console.log(error)
        }
    })
}

export default  UseLogin;
