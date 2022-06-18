import React from 'react'
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import MainBtn from './MainBtn';


const MainImage = ({Img, MobileImg, title, text, btn1, btn2}) => {

    const {ref, inView} = useInView({
        
    })

    console.log(inView);

  return (
    <StContainer>
        <StMainImg Img={Img} MobileImg={MobileImg} inView={inView}>
            <StTitleBox ref={ref}>
                <StTitle>{title}</StTitle>
                <StTest>{text}</StTest>
            </StTitleBox>
            <MainBtn btn1={btn1} btn2={btn2}/>
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

const StTitleBox = styled.div`
    position: absolute;
    top: 200px;
`;

const StTitle = styled.h1`
    font-family: text;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 10px;
`;

const StTest = styled.span`
    font-family: text;
    font-weight: lighter;
`;


export default MainImage;
