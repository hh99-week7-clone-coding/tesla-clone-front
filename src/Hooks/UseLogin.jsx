import { useMutation } from 'react-query';
// import Axios Instance
import apis from "../api/main";

const login = async (data) => {
    return await apis.login(data)
}

const UseLogin = () => {
    return useMutation(login, {
        onSuccess : () => {
            console.log("로그인 성공!")
        },
        onError : (error) => {
            console.log(error)
        }
    })
}

export default  UseLogin;
