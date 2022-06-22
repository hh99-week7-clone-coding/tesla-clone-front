import React, { forwardRef } from 'react'
import styled from 'styled-components';
import { useInView } from "react-intersection-observer";
import "../pages/style/home.css";
// import components
import MainBtn from "./MainBtn";
import { StMainImg, StContainer,  StTitleBox, StTitle, StText } from '../components/Styles';


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
                { title === "Model Y" ? <MainBtn btn1={btn1} btn2={btn2} vehicleId={8}/> : <div></div>}
                { title === "Model S" ? <MainBtn btn1={btn1} btn2={btn2} vehicleId={1}/> : <div></div>}
                { title === "Model X" ? <MainBtn btn1={btn1} btn2={btn2} vehicleId={6}/> : <div></div>}
            </StImgContent>
            <StInViewBox ref={ref}/>
        </StMainImg>
    </StContainer>
    
  )
})

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

const StInViewBox = styled.div`
    position: absolute;
    top: 400px;
    width: 1px;
    height: 600px;
`;

export default MainImage;
