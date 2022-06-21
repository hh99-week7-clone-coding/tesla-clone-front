import { useMutation } from 'react-query';
// import Axios Instance
import apis from "../api/main";

const login = async (data) => {
    const loginRes = await apis.login(data);
    return loginRes
}

const UseLogin = () => {
    return useMutation(login, {
        onSuccess : (res) => {
            console.log(res);
            console.log("로그인 성공!")  // 콘솔 찍힘
        },
        onError : (error) => {
            alert("Please Check your Email or Password !");
            console.log(error)
        }
    })
}

export default  UseLogin;
