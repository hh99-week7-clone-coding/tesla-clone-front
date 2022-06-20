import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
// import Styled-components
import { StLogo, StLink } from '../components/Styles';
import { StLoginContainer, StTitle, StText, StBtn, StHrBox, StHr, SignUpBtn } from './login';
// import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
// import Axios Instance
import apis from "../api/main";

const Signup = () => {

  const { register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = data => console.log(data);
  // const onSubmit = data => apis.postUser(data);

  return (
    <StLoginContainer>
      <StLogo>TESLA</StLogo>
      <StSignupBox onSubmit={handleSubmit(onSubmit)}>
        <StTitle>Create Account</StTitle>
        <StText>Select Market</StText>
        <StSelect {...register("nation", { required: true })}>
          <option>North America</option>
          <option>Europe</option>
          <option>Middle East</option>
          <option>Asia/Pacific</option>
        </StSelect>
        <StText>First Name</StText>
        <StInput type="text" {...register("firstName", { required: true, maxLength: 20 })}/>
          { errors.firstName?.type === "required" ? 
            <StAlertBox>
              <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
              <StAlert color="tomato">First Name is required.</StAlert>
            </StAlertBox>
            : null
          }
          { errors.firstName?.type === "maxLength" ? 
          <StAlertBox>
            <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
            <StAlert color="tomato">First Name is too long.(Max Length : 20)</StAlert>
          </StAlertBox>
           : null
          }
          {errors.firstName?.type === undefined ? 
            <StAlertBox>
              <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>
              <StAlert color="green">Nice First name!</StAlert>
            </StAlertBox> : null
          }
        <StText>Last Name</StText>
        <StInput type="text" {...register("lastName", { required: true, maxLength: 20 })}/>
          { errors.lastName?.type === "required" ? 
              <StAlertBox>
                <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
                <StAlert color="tomato">Last Name is required.</StAlert>
              </StAlertBox>
              : null
            }
            { errors.lastName?.type === "maxLength" ? 
            <StAlertBox>
              <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
              <StAlert color="tomato">Last Name is too long.(Max Length : 20)</StAlert>
            </StAlertBox>
            : null
            }
            {errors.lastName?.type === undefined ? 
              <StAlertBox>
                <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>
                <StAlert color="green">Nice Last name!</StAlert>
              </StAlertBox> : null
            }
        <StText>Email Address</StText>
        <StInput type="text" {...register("userName", { required: true, pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i})}/>
          { errors.userName?.type === "required" ? 
                <StAlertBox>
                  <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
                  <StAlert color="tomato">Email Address is required.</StAlert>
                </StAlertBox>
                : null
              }
              { errors.userName?.type === "pattern" ? 
              <StAlertBox>
                <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
                <StAlert color="tomato">Please enter Email Address.</StAlert>
              </StAlertBox>
              : null
              }
              {errors.userName?.type === undefined ? 
                <StAlertBox>
                  <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>
                  <StAlert color="green">Nice Email Address!</StAlert>
                </StAlertBox> : null
              }
        <StText>Password</StText>
        <StInput type="password" {...register("password", { required: true, minLength: 8, maxLength: 20, pattern: /^(?=.*[0-9])(?=.*[a-zA-z]).{8,20}$/})}/>
        { errors.password?.type === "required" ? 
                <StAlertBox>
                  <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
                  <StAlert color="tomato">Password is required.</StAlert>
                </StAlertBox>
                : null
              }
              { errors.password?.type === "pattern" ? 
              <StAlertBox>
                <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
                <StAlert color="tomato">Password must contain at least 1 Letter in Small Case and 1 number.</StAlert>
              </StAlertBox>
              : null
              }
              { errors.password?.type === "minLength" ? 
              <StAlertBox>
                <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
                <StAlert color="tomato">Password is too short.(min Length : 8)</StAlert>
              </StAlertBox>
              : null
              }
              { errors.password?.type === "maxLength" ? 
              <StAlertBox>
                <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
                <StAlert color="tomato">Password is too long.(max Length : 20)</StAlert>
              </StAlertBox>
              : null
              }
              {errors.password?.type === undefined ? 
                <StAlertBox>
                  <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>
                  <StAlert color="green">Nice password!</StAlert>
                </StAlertBox> : null
              }
        <StBtn>CREATE ACCOUNT</StBtn>
        <StHrBox>
          <StHr/><StText>OR</StText><StHr/>
        </StHrBox>
        <StLink to={'/login'}><SignUpBtn type="submit">SIGN IN</SignUpBtn></StLink>
      </StSignupBox>
    </StLoginContainer>
  )
}

const StSignupBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  height: 800px;
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

const StAlertBox = styled.div`
  display: flex;
  width: 300px;
  height: 10px;
  padding: 10px;
  margin: 0px 40px;
  transition: 0.3s ease-in-out;
`;

const StAlert = styled.span`
  color: ${props => props.color};
  font-family: "text";
  font-size: 13px;
  margin-left: 10px;
  transition: 0.3s ease-in-out;
`;

export default Signup;
