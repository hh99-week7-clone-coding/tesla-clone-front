import styled from "styled-components";
import { Link } from "react-router-dom";

export const StLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

export const StLogo = styled.h1`
    position: fixed;
    top: 3vh;
    left: 2vw;
    font-family: 'Logo';
    font-size: 18px;
    letter-spacing: 10px;
    &:hover{
        cursor: pointer;
    }
`;

export const StContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const StMainImg = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.Img});
    background-size: cover;
    background-position: 50%;
    @media only screen and (max-width: 500px) {
       background-image: url(${props => props.MobileImg});
       width: 100vw;
       height: auto;
    }
`;

export const StTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 500px;
`;

export const StTitle = styled.h1`
    font-family: text;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 10px;
    animation : onMountTitle 1s;
    animation-fill-mode: forwards;
`;

export const StText = styled.span`
    font-family: text;
    font-weight: lighter;
    animation : onMountText 2s;
    animation-fill-mode: forwards;
`;

export const StBtn = styled.button`
    width: 230px;
    height: 40px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    border-radius: 20px;
    border: ${props => props.border};
    animation : ${props => props.animation};
    animation-fill-mode: forwards;
    &:hover{
        cursor: pointer;
    }
`;

export const StBoldText = styled.span`
    font-family: text;
    font-size: 15px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
`;

export const StInfoBig = styled.h2`
  color: white;
  font-family: text;
  font-size: 28px;
  margin-bottom: 10px;
`;

export const StInfoSmall = styled.span`
  color: white;
  font-family: text;
  font-size: 13px;
`;

export const StSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.backgroundColor};
`;
