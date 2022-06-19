import React from 'react'
import styled from 'styled-components';
import MainBtn from './MainBtn';
import "../pages/style/home.css";


const FirstImage = ({Img, MobileImg, title, text, btn1, btn2}) => {

    
  return (
    <StContainer>
        <StMainImg Img={Img} MobileImg={MobileImg}>
            <StImgContent>
                <StTitleBox>
                    <StTitle>{title}</StTitle>
                    <StText>{text}</StText>
                </StTitleBox>
                <MainBtn btn1={btn1} btn2={btn2}/>
            </StImgContent>
        </StMainImg>
    </StContainer>
    
  )
}

const StContainer = styled.div`
    width: 100vw;
    text-align: center;
`;

const StMainImg = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.Img});
    background-size: cover;
    @media only screen and (max-width: 500px) {
       background-image: url(${props => props.MobileImg});
    }
`;

const StImgContent = styled.div`
    position: absolute;
    top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 70vh;
    height: 90vh;    
`;

const StTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 500px;
`;

const StTitle = styled.h1`
    font-family: text;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 10px;
    animation : onMountTitle 1s;
    animation-fill-mode: forwards;
`;

const StText = styled.span`
    font-family: text;
    font-weight: lighter;
    animation : onMountText 2s;
    animation-fill-mode: forwards;
`;

export default FirstImage;