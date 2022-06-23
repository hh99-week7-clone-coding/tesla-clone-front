import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCookie, getCookie } from '../Cookie'
import { menuOpen } from "../redux/modules/home";
import { isLoginUser } from "../redux/modules/home";
import styled from "styled-components";
import "../App.css";

const Header = ({top}) => {

    const dispatch = useDispatch();

    const token = getCookie("token");

    useEffect(() => {
        
        if(token){
            dispatch(isLoginUser(true))
        } else {
            dispatch(isLoginUser(false))
        }
    },[dispatch, token])

    const [hover, setHover] = useState(0);
    const [sideHover, setSideHover] = useState(0);
    const [out, setOut] = useState(false);
    const [sideOut, setSideOut] = useState(false);

    const isMenuOpened = useSelector(state => state.home.menuOpened)
    const isLogin = useSelector(state => state.home.isLogin)

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

    const logOutHandler = () => {
        removeCookie("token");
        dispatch(isLoginUser(false));
        alert("SEE YOU AGAIN")
    }

  return (
    <StHeaderBox top={top}>
        <StLink to={'/'}><StLogo>TESLA</StLogo></StLink>
        <StMenuBox width="30vw" minWidth="400px" onMouseLeave={onOut}>
            <StMenuBtn id="5" onMouseEnter={onHoverBtn}><StLink to={'/vehicle/info/model%20S'}>Model S</StLink></StMenuBtn>
            <StMenuBtn id="115" onMouseEnter={onHoverBtn}><StLink to={'/vehicle/info/model%203'}>Model 3</StLink></StMenuBtn>
            <StMenuBtn id="230" onMouseEnter={onHoverBtn}><StLink to={'/vehicle/info/model%20X'}>Model X</StLink></StMenuBtn>
            <StMenuBtn id="340" onMouseEnter={onHoverBtn}><StLink to={'/vehicle/info/model%20Y'}>Model Y</StLink></StMenuBtn>
            <StMenuBtn id="455" onMouseEnter={onHoverBtn}>About Us</StMenuBtn>
            <StMenuHover hover={hover} out={out} width="100px"/>
        </StMenuBox>
        <StMenuBox width="13vw" minWidth="250px"  onMouseLeave={onSideOut}>
            <StMenuBtn id="0" onMouseEnter={onSideHoverBtn}><StLink to={'/shop'}>Shop</StLink></StMenuBtn>
            { isLogin ? (<StMenuBtn id="110" onMouseEnter={onSideHoverBtn} onClick={logOutHandler}>LogOut</StMenuBtn>) :
            (<StMenuBtn id="110" onMouseEnter={onSideHoverBtn}><StLink to={'/login'}>Account</StLink></StMenuBtn>)}
            <StMenuBtn id="220" onMouseEnter={onSideHoverBtn} onClick={onMenuOpen}>Menu</StMenuBtn>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: ${props => props.top};
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

const StMenuBox = styled.div`
    position: relative;
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    height: 60px;
    z-index: 100;
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