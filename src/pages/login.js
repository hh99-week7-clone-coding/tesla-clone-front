import React from 'react'
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { StLogo, StLink } from '../components/Styles';
// import Hook
import UseLogin from "../Hooks/UseLogin";

const Login = () => {

  const { register, handleSubmit, formState : {error}} = useForm({
    defaultValues : {
      "username" : "",
      "password" : ""
    }
  });


  const { mutate, isLoading, mutateAsync } = UseLogin();

  const onSubmit = data => {
    mutate(data)
    console.log(mutateAsync);

  }


  return (
    <StLoginContainer>
      <StLogo>TESLA</StLogo>
      <StLoginBox onSubmit={handleSubmit(onSubmit)}>
        <StTitle>Sign In</StTitle>
        <StText>Email Address</StText>
        <StInput type="text"{...register("username", { required : true})}/>
        <StText>Password</StText>
        <StInput type="password" {...register("password", { required : true})}/>
        { isLoading ? <StLoadingBtn>Loading..</StLoadingBtn> : <StBtn type="submit">NEXT</StBtn>}
        <StSpanBox>
          <span>Forgot email?</span>
          <span>|</span>
          <span>Forgot password?</span>
        </StSpanBox>
        <StHrBox>
          <StHr/>
          <StText>OR</StText>
          <StHr/>
        </StHrBox>
        <StLink to={'/signup'}><SignUpBtn>CREATE ACCOUNT</SignUpBtn></StLink>
      </StLoginBox>
    </StLoginContainer>
  )
}

export const StLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const StLoginBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  height: 600px;
  margin-top: 100px;
`;

export const StTitle = styled.h1`
  font-family: "text";
`;

export const StText = styled.span`
  font-family: "text";
  color: rgba(0,0,0,0.7);
  font-size: 15px;
`;

const StInput = styled.input`
  width: 300px;
  height: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid transparent;
  margin: 0px auto;
  background-color: #f5f5f5;
  transition: 0.3s ease-in-out;
  &:focus{
    outline: none;
    border: 2px solid rgba(0,0,0,0.3);
  }
`;

export const StBtn = styled.button`
  width: 350px;
  height: 42px;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  margin: 20px auto;
  background-color: #3d69e1;
  color: white;
  font-family: "text";
  font-size: 12px;
  transition: 0.3s ease-in-out;
  &:hover{
    cursor: pointer;
    background-color: #3457b2;
  }
`;

export const StLoadingBtn = styled.button`
  width: 350px;
  height: 42px;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  margin: 20px auto;
  background-color: #ddd;
  color: white;
  font-family: "text";
  font-size: 12px;
  transition: 0.3s ease-in-out;
`;

const StSpanBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  margin: 0px auto;
  font-size: 13px;
  font-family: "text";
`;

export const StHrBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;
  margin: 20px auto;
`;

export const StHr = styled.hr`
  width: 130px;
  color: #e2e4e4;
`;

export const SignUpBtn = styled.button`
  width: 350px;
  height: 42px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 3px solid black;
  margin: 0px 27px;
  background-color: white;
  color: black;
  font-family: "text";
  font-size: 12px;
  transition: 0.3s ease-in-out;
  &:hover{
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

export default Login;
