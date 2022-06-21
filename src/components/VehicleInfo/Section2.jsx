import React from 'react'
import styled from 'styled-components';
import { StSectionContainer, StInfoBig, StInfoSmall } from '../Styles';

const Section2 = ({Img1, Img2, Img3, title1, title2, title3, text1, text2, text3}) => {
  return (
    <>
        <StSectionContainer backgroundColor="black">
        <StSection2Box>
          <StSection2InnerBox>
            <StSection2SmallBox img={Img1}/>
            <StSection2SmallBox>
              <StInfoBig>{title1}</StInfoBig>
              <StInfoSmall>{text1}</StInfoSmall>
            </StSection2SmallBox>
          </StSection2InnerBox>
          <StSection2InnerBox>
            <StSection2SmallBox>
              <StInfoBig>{title2}</StInfoBig>
              <StInfoSmall>{text2}</StInfoSmall>
            </StSection2SmallBox>
            <StSection2SmallBox img={Img2}/>
          </StSection2InnerBox>
          <StSection2InnerBox>
            <StSection2SmallBox img={Img3}/>
            <StSection2SmallBox>
              <StInfoBig>{title3}</StInfoBig>
              <StInfoSmall>{text3}</StInfoSmall>
            </StSection2SmallBox>
          </StSection2InnerBox>
        </StSection2Box>
      </StSectionContainer>
    </>
  )
}

const StSection2Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 90%;
  margin-top: 100px;
`;

const StSection2InnerBox = styled.div`
  display: flex;
  width: 100%;
  height: 33%;
`;

const StSection2SmallBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 50%;
  margin: 0px 30px;
`;

export default Section2;
