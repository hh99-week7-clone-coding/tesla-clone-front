import { useMutation } from 'react-query';
import { setCookie } from '../Cookie';
// import Axios Instance
import apis from "../api/main";

const login = async (data) => {
    const loginUserInfo = await apis.login(data);
    return loginUserInfo
}

const UseLogin = () => {
    return useMutation(login, {
        onSuccess : (res) => {
            setCookie("token", res.headers.authorization)
            alert("WELCOME TO TESLA")
        },
        onError : (error) => {
            alert("Please Check your Email or Password !");
            console.log(error)
        }
    })
}

export default  UseLogin;
