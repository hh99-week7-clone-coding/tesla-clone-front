import React from 'react'
import styled from 'styled-components';
import { StLogo } from './vehicleDetail';

const Login = () => {
  return (
    <StLoginContainer>
      <StLogo>TESLA</StLogo>
      <StLoginBox>
        <StTitle>Sign In</StTitle>
        <StText>Email Address</StText>
        <StInput type="email" required/>
        <StBtn>NEXT</StBtn>
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
        
        <SignUpBtn>CREATE ACCOUNT</SignUpBtn>
      </StLoginBox>
    </StLoginContainer>
  )
}

const StLoginContainer = styled.div`
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
  height: 400px;
  margin-top: 100px;
`;

const StTitle = styled.h1`
  font-family: "text";
`;

const StText = styled.span`
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

const StBtn = styled.button`
  width: 350px;
  height: 42px;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  margin: 0px auto;
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

const StSpanBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  margin: 0px auto;
  font-size: 13px;
  font-family: "text";
`;

const StHrBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;
  margin: 0 auto;
`;

const StHr = styled.hr`
  width: 130px;
  color: #e2e4e4;
`;

const SignUpBtn = styled.button`
  width: 350px;
  height: 42px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 3px solid black;
  margin: 0px auto;
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
