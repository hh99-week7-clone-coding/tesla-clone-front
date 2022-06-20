import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import { StLogo, StLink } from '../components/Styles';
import { StLoginContainer, StTitle, StText, StInput, StBtn, StHrBox, StHr, SignUpBtn } from './login';

const Signup = () => {
  return (
    <StLoginContainer>
      <StLogo>TESLA</StLogo>
      <StSignupBox>
        <StTitle>Create Account</StTitle>
        <StText>Select Market</StText>
        <StSelect>
          <option>North America</option>
          <option>Europe</option>
          <option>Middle East</option>
          <option>Asia/Pacific</option>
        </StSelect>
        <StText>First Name</StText>
        <StInput type="text" required/>
        <StText>Last Name</StText>
        <StInput type="text" required/>
        <StText>ID</StText>
        <StInput type="text" required/>
        <StText>Password</StText>
        <StInput type="password" required/>
        <StBtn>CREATE ACCOUNT</StBtn>
        <StHrBox>
          <StHr/><StText>OR</StText><StHr/>
        </StHrBox>
        <StLink to={'/login'}><SignUpBtn type="submit">SIGN IN</SignUpBtn></StLink>
      </StSignupBox>
    </StLoginContainer>
  )
}

const StSignupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  height: 750px;
  margin-top: 100px;
`;

const StSelect = styled.select`
  width: 340px;
  height: 45px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid transparent;
  margin: 0px auto;
  background-color: #f5f5f5;
  transition: 0.3s ease-in-out;
  font-family: "text";
  &:focus{
    outline: none;
    border: 2px solid rgba(0,0,0,0.3);
  }
  &:hover{
    cursor: pointer;
  }
`;
export default Signup;
