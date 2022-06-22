import React from 'react'
import styled from 'styled-components';
import { StLink, StSectionContainer, StTitle, StBtn } from '../Styles';


const Section5 = ({title, img, modelId}) => {
  return (
    <>
        <StSectionContainer backgroundColor="white">
            <StSection5Box>
                <StTitle>{title}</StTitle>
                <StBtnBox>
                    <StLink to={`/vehicle/${modelId}`}><StBtn backgroundColor="transparent" color="black" border="3px solid black">ORDER NOW</StBtn></StLink>
                    <StBtn backgroundColor="transparent" color="black" border="3px solid black">COMPARE</StBtn>
                </StBtnBox>
            </StSection5Box>
            <StSection5Box img={img}>

            </StSection5Box>
        </StSectionContainer>   
    </>
  )
}

const StSection5Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    height: 80%;
    margin-top: 70px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: 50%;
`;

const StBtnBox = styled.div`
    display: flex;
    justify-content: space-between;
    width : 500px;
    height: 10%;
`;



export default Section5;
