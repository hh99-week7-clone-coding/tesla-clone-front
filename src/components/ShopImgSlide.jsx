import React from 'react'
import styled from 'styled-components';
// import Img
import ShopMain1 from "../image/shop/main/shop-main-1.jpeg";
import ShopMain2 from "../image/shop/main/shop-main-2.jpeg";
import ShopMain3 from "../image/shop/main/shop-main-3.jpeg";

const ShopImgSlide = () => {
  return (
    <StImgSlideContainer>
        <StImg src={ShopMain1}/>
        <StImg src={ShopMain2}/>
        <StImg src={ShopMain3}/>
        <StContentBox>
            <StTitle></StTitle>
        </StContentBox>
    </StImgSlideContainer>
  )
}

const StImgSlideContainer = styled.div`
    position: relative;
    width: 300vw;
    height: 100vh;
`;

const StImg = styled.img`
    width: 100vw;
    height: 100vh;
`;

const StContentBox = styled.div`
    position: absolute;
    bottom: 0;
    left:30vw;
    width: 800px;
    height: 300px;
    background-color: tomato;
`;

export default ShopImgSlide;
