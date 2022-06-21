import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { StLink } from '../components/Styles';
import "../pages/style/home.css";

const SideMenu = () => {
  return (
    <StSideMenuBox>
        <StMenuText>model S</StMenuText>
        <StMenuText>model 3</StMenuText>
        <StMenuText>model X</StMenuText>
        <StMenuText>model Y</StMenuText>
        <StMenuText>Shop</StMenuText>
        <StLink to={'/login'}><StMenuText>Account</StMenuText></StLink>
    </StSideMenuBox>
  )
}

const StSideMenuBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
    height: 100vh;
    padding: 20px;
    background-color: white;
    z-index: 200;
    animation: onMenuOpen 0.3s ease-in-out;
    animation-fill-mode: forwards;
`;

const StMenuText = styled.div`
    font-family: "text";
    font-size: 17px;
    color: rgba(0,0,0,0.7);
    margin: 40px 30px;
    padding: 10px;
    border-radius: 20px;
    width: 200px;
    height: 20px;
    background-color: transparent;
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: rgba(0,0,0,0.1);
    }
`;

export default SideMenu;