import React from 'react'
import styled from 'styled-components';
import "../pages/style/home.css";
import { Link } from 'react-router-dom'

const MainBtn = ({btn1, btn2}) => {

  return (
    <StBtnBox>
        <StLink to={'/vehicle/detail'}><StBtn backgroundColor="#3a3d41" color="white">{btn1}</StBtn></StLink>
        <StBtn backgroundColor="#e6e6e5" color="#787a7c">{btn2}</StBtn>
    </StBtnBox>
  )
}

const StBtnBox = styled.div`
    position: absolute;
    bottom: 100px;
    display: flex;
    align-items: flex-end;
    animation : onMountText 2s;
    animation-fill-mode: forwards;
    /* display: ${props => props.inView ? "flex" : "none"}; */
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StBtn = styled.div`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 40px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: bold;
    margin: 0px 15px;
`;


export default MainBtn;
