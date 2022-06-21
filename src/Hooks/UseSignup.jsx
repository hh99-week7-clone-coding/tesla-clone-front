import { useMutation } from 'react-query';
// import Axios Instance
import apis from "../api/main";

const signup = async (data) => {
    return await apis.postUser(data)
}

const UseSignup = () => {
    return useMutation(signup, {
        onSuccess : () => {
            console.log("회원가입 성공!")
        },
        onError : (error) => {
            console.log(error)
        }
    })
}

export default  UseSignup;
