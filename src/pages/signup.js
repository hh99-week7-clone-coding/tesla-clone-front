import React from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom"
import { useForm, useFormState } from "react-hook-form";
// import Styled-components
import { StLogo, StLink } from '../components/Styles';
import { StLoginContainer, StTitle, StText, StHrBox, StHr, SignUpBtn } from './login';
// import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
// import Hook
import UseSignup from '../Hooks/UseSignup';


const Signup = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: {errors, isValid}, control} = useForm({
    mode: "onChange",
    defaultValues : {
      "nation": "",
      "firstName" : "",
      "lastName" : "",
      "username" : "",
      "password" : ""
    }
  });

  const { dirtyFields } = useFormState({
    control
  });

  const { mutate } = UseSignup();

  const onSubmit = data => {
    mutate(data)
    alert("회원가입 완료!");
    navigate('/login');
  };

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
          { errors.firstName?.type === "required" || dirtyFields.firstName === undefined ? 
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
          {errors.firstName?.type === undefined && dirtyFields.firstName === true ? 
            <StAlertBox>
              <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>
              <StAlert color="green">Nice First name!</StAlert>
            </StAlertBox> : null
          }
        <StText>Last Name</StText>
        <StInput type="text" {...register("lastName", { required: true, maxLength: 20 })}/>
          { errors.lastName?.type === "required" || dirtyFields.lastName === undefined ? 
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
            {errors.lastName?.type === undefined && dirtyFields.lastName === true ? 
              <StAlertBox>
                <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>
                <StAlert color="green">Nice Last name!</StAlert>
              </StAlertBox> : null
            }
        <StText>Email Address</StText>
        <StInput type="text" {...register("username", { required: true, pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i})}/>
          { errors.username?.type === "required" || dirtyFields.username === undefined ? 
                <StAlertBox>
                  <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
                  <StAlert color="tomato">Email Address is required.</StAlert>
                </StAlertBox>
                : null
              }
              { errors.username?.type === "pattern" ? 
              <StAlertBox>
                <FontAwesomeIcon icon={faTriangleExclamation} style={{color:"tomato"}}/>
                <StAlert color="tomato">Please enter Email Address.</StAlert>
              </StAlertBox>
              : null
              }
              {errors.username?.type === undefined && dirtyFields.username === true ? 
                <StAlertBox>
                  <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>
                  <StAlert color="green">Nice Email Address!</StAlert>
                </StAlertBox> : null
              }
        <StText>Password</StText>
        <StInput type="password" {...register("password", { required: true, minLength: 8, maxLength: 20, pattern: /^(?=.*[0-9])(?=.*[a-zA-z]).{8,20}$/})}/>
        { errors.password?.type === "required" ||dirtyFields.password === undefined ? 
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
              {errors.password?.type === undefined && dirtyFields.password === true ? 
                <StAlertBox>
                  <FontAwesomeIcon icon={faCircleCheck} style={{color:"green"}}/>
                  <StAlert color="green">Nice password!</StAlert>
                </StAlertBox> : null
              }
        <StBtn>CREATE ACCOUNT</StBtn>
        <StHrBox>
          <StHr/><StText>OR</StText><StHr/>
        </StHrBox>
        <StLink to={'/login'}><SignUpBtn type="submit" disabled={!isValid}>SIGN IN</SignUpBtn></StLink>
      </StSignupBox>
    </StLoginContainer>
  )
}

const StSignupBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  height: 850px;
  margin-top: 80px;
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

const StBtn = styled.button`
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

export default Signup;
