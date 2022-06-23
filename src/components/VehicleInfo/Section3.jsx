import React from 'react'
import styled from 'styled-components';
import { StLink, StInfoBig, StInfoSmall, StBtn } from '../Styles';


const Section3 = ({Img, MobileImg, smallTitle, title, text, modelId}) => {
  return (
    <>
        <StMainImg Img={Img} MobileImg={MobileImg}/>
      <StInfoContainer height="25vh">
        <div style={{width:"20%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <StInfoSmall>{smallTitle}</StInfoSmall>
          <StInfoBig>{title}</StInfoBig>
          <StLink to={`/vehicle/${modelId}`}><StBtn backgroundColor="transparent" color="white" border="3px solid white">ORDER NOW</StBtn></StLink>
        </div>
        <div style={{width:"40%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <StInfoSmall>{text}</StInfoSmall>
        </div>
      </StInfoContainer>
    </>
  )
}

const StMainImg = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    background-image: url(${props => props.Img});
    background-size: cover;
    background-position: 50%;
    @media only screen and (max-width: 500px) {
       background-image: url(${props => props.MobileImg});
       width: 100vw;
       height: auto;
    }
`;

const StInfoContainer = styled.div`
  background: black;
  width: 100vw;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
`;

export default Section3;
