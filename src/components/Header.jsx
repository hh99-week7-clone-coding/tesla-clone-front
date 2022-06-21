import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { menuOpen } from "../redux/modules/home";
import styled from "styled-components";
import "../App.css";

const Header = () => {

    const dispatch = useDispatch();

    const [hover, setHover] = useState(0);
    const [sideHover, setSideHover] = useState(0);
    const [out, setOut] = useState(false);
    const [sideOut, setSideOut] = useState(false);

    const isMenuOpened = useSelector(state => state.home.menuOpened)

    const onHoverBtn = (event) => {
        setHover(event.target.id);
        setOut(false)
    }

    const onSideHoverBtn = (event) => {
        setSideHover(event.target.id);
        setSideOut(false);
    }

    const onOut = () => {
        setOut(true)
    }

    const onSideOut = () => {
        setSideOut(true);
    }

    const onMenuOpen = () => {
        dispatch(menuOpen())
    }

  return (
    <StHeaderBox>
        <StLink to={'/'}><StLogo>TESLA</StLogo></StLink>
        <StMenu>
            <StMenuBox width="700px" minWidth="550px" onMouseLeave={onOut}>
                <StMenuBtn id="5" onMouseEnter={onHoverBtn}>Model S</StMenuBtn>
                <StMenuBtn id="120" onMouseEnter={onHoverBtn}>Model 3</StMenuBtn>
                <StMenuBtn id="235" onMouseEnter={onHoverBtn}>Model X</StMenuBtn>
                <StMenuBtn id="350" onMouseEnter={onHoverBtn}>Model Y</StMenuBtn>
                <StMenuBtn id="465" onMouseEnter={onHoverBtn}>Solar Roof</StMenuBtn>
                <StMenuBtn id="580" onMouseEnter={onHoverBtn}>Solar Panels</StMenuBtn>
                <StMenuHover hover={hover} out={out} width="100px"/>
            </StMenuBox>
        </StMenu>
        <StMenuBox width="17vw" minWidth="250px"  onMouseLeave={onSideOut}>
            <StMenuBtn id="0" onMouseEnter={onSideHoverBtn}><StLink to={'/shop'}>Shop</StLink></StMenuBtn>
            <StMenuBtn id="100" onMouseEnter={onSideHoverBtn}><StLink to={'/login'}>Account</StLink></StMenuBtn>
            <StMenuBtn id="200" onMouseEnter={onSideHoverBtn} onClick={onMenuOpen}>Menu</StMenuBtn>
            <StMenuHover hover={sideHover} out={sideOut} width="calc(100% / 4)"/>
        </StMenuBox>
        <StSideMenu onClick={onMenuOpen}>Menu</StSideMenu>
    </StHeaderBox>
  )
};

export const StLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const StHeaderBox = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    display: flex;
    align-items: center;
    width: 100vw;
    min-width: 600px;
    height: 40px;
    background-color: transparent;
    z-index: 50;
`;

export const StLogo = styled.h1`
    margin: 20px 35px;
    font-family: 'Logo';
    font-size: 18px;
    letter-spacing: 10px;
    &:hover{
        cursor: pointer;
    }
`;

const StMenu = styled.div`
    display: flex;
    justify-content: center;
    width: 80vw;
    height: 60px;
`;

const StMenuBox = styled.div`
    position: relative;
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    height: 60px;
    @media only screen and (max-width: 1200px) {
        display: none;
    }
`;

const StMenuBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 60px;
    font-family: "text";
    font-size: 14px;
    font-weight: bold;
    z-index: 100;
    &:hover{
        cursor: pointer;
    }
    @media only screen and (max-width: 1200px) {
        display: none;
    }
`;

const StMenuHover = styled.div`
    position: absolute;
    top: 15px; 
    left: 5px;
    left: ${props => props.hover}px;
    background-color: rgba(0,0,0,0.1);
    width: ${props => props.width};
    height: 30px;
    margin-left: 10px;
    border-radius: 10px;
    transition: 0.5s ease-out;
    display: ${props => props.out ? "none" : "block"};
`;

const StSideMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 30px;
    margin: 0px 30px;
    border-radius: 10px;
    font-family: "text";
    font-size: 15px;
    letter-spacing: 1px;
    transition: 0.5s ease-out;
    font-weight: bold;@media only screen and (min-width: 1200px) {
        display: none;
    }
    &:hover{
        background-color: rgba(0,0,0,0.1);
        width: 100px;
        height: 30px;
        cursor: pointer;
    }
`;

export default Header;