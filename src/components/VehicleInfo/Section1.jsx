import React from 'react'
import styled from 'styled-components';
import { StLink, StMainImg, StTitleBox, StTitle, StText, StInfoBig, StInfoSmall, StBtn } from '../Styles';

const Section1 = ({Img, MobileImg, title, text, infoBig1, infoSmall1, infoBig2, infoSmall2, infoBig3, infoSmall3, infoBig4, infoSmall4, modelId}) => {

  return (
    <>
        <StMainImg Img={Img} MobileImg={MobileImg}/>
      <StContentBox>
        <StTitleBox>
          <StTitle>{title}</StTitle>
          <StText>{text}</StText>
        </StTitleBox>
        <StInfoContainer background="linear-gradient(transparent, black)" height="15vh">
          <StInfoBox>
              <StInfoInnerBox animation="mounting 1s">
                <StInfoBig>{infoBig1}</StInfoBig>
                <StInfoSmall>{infoSmall1}</StInfoSmall>
              </StInfoInnerBox>
              <StInfoInnerBox animation="mounting 1.6s">
                <StInfoBig>{infoBig2}</StInfoBig>
                <StInfoSmall>{infoSmall2}</StInfoSmall>
              </StInfoInnerBox>
              <StInfoInnerBox animation="mounting 2.2s">
                <StInfoBig>{infoBig3}</StInfoBig>
                <StInfoSmall>{infoSmall3}</StInfoSmall>
              </StInfoInnerBox>
              <StInfoInnerBox animation="mounting 2.8s">
                <StInfoBig>{infoBig4}</StInfoBig>
                <StInfoSmall>{infoSmall4}</StInfoSmall>
              </StInfoInnerBox>
              <StLink to={`/vehicle/${modelId}`}><StBtn backgroundColor="transparent" 
                      color="white" 
                      border="3px solid white" 
                      animation="mounting 3.4s">
              ORDER NOW</StBtn></StLink>
          </StInfoBox>
        </StInfoContainer>
      </StContentBox>
    </>
  )
}

const StContentBox = styled.div`
  position: absolute;
    top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 90vh;  
`;

const StInfoContainer = styled.div`
  background: ${props => props.background};
  width: 100vw;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
`;

const StInfoBox = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StInfoInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation : ${props => props.animation};
  animation-fill-mode: forwards;
`;



export default Section1;