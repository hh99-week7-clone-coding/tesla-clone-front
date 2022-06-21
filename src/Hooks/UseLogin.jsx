import { useMutation } from 'react-query';
// import Axios Instance
import apis from "../api/main";
<<<<<<< HEAD

const login = async (data) => {
    const loginRes = await apis.login(data);
    return loginRes
=======

import { setCookie } from '../Cookie';

const login = async (data) => {
    await apis.login(data);

>>>>>>> 935f801a768a846f742260f4cd56e07307778613
}

const UseLogin = () => {
    return useMutation(login, {
<<<<<<< HEAD
        onSuccess : (res) => {
            console.log(res);
=======

        onSuccess : (data, variable, context) => {
>>>>>>> 935f801a768a846f742260f4cd56e07307778613
            console.log("로그인 성공!")  // 콘솔 찍힘

        },
        onError : (error) => {
            alert("Please Check your Email or Password !");
            console.log(error)
        }
    })
}

export default  UseLogin;
