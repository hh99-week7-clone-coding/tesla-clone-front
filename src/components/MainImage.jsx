import React, { forwardRef } from 'react'
import styled from 'styled-components';
import { useInView } from "react-intersection-observer";
import "../pages/style/home.css";
// import components
import MainBtn from './MainBtn';


const MainImage = forwardRef(({Img, MobileImg, title, text, btn1, btn2}, section2Ref) => {

    const { ref, inView } = useInView({
        threshold: 0.5  
      });
    
  return (
    <StContainer ref={section2Ref}>
        <StMainImg Img={Img} MobileImg={MobileImg}>
            <StImgContent inView={inView}>
                <StTitleBox>
                    <StTitle>{title}</StTitle>
                    <StText>{text}</StText>
                </StTitleBox>
                <MainBtn btn1={btn1} btn2={btn2}/>
            </StImgContent>
            <StInViewBox ref={ref}/>
        </StMainImg>
    </StContainer>
    
  )
})

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
       width: 100vw;
       height: auto;
    }
`;

const StImgContent = styled.div`
    position: absolute;
    top: 15vh;
    display: ${props => props.inView ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    height: 85vh;    
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

const StInViewBox = styled.div`
    position: absolute;
    top: 400px;
    width: 500px;
    height: 600px;
`;

export default MainImage;
