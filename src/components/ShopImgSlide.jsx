import React, { useState } from 'react'
import styled from 'styled-components';
// import Img
import ShopMain1 from "../image/shop/main/shop-main-1.jpeg";
import ShopMain2 from "../image/shop/main/shop-main-2.jpeg";
import ShopMain3 from "../image/shop/main/shop-main-3.jpeg";

const ShopImgSlide = () => {

    // 이미지 슬라이드 버튼
    const [img, setImg] = useState(0);

    const firstDot = () => {
        setImg(0)
    }
    const secondDot = () => {
        setImg(-100)
    }
    const thirdDot = () => {
        setImg(-200)
    }

  return (
    <div style={{overflow:"hidden"}}>
        <StImgSlideContainer img={img}>
            <StImg src={ShopMain1} >
                <StContentBox>
                    <StTitle>Wall Connector</StTitle>
                    <StMiddle>The most convenient way to charge at home</StMiddle>
                    <StBtn>SHOP NOW</StBtn>
                    <StDotBox>
                        <StDot onClick={firstDot} img={img}/>
                        <StDot onClick={secondDot} img={img}/>
                        <StDot onClick={thirdDot} img={img}/>
                    </StDotBox>
                </StContentBox>
            </StImg>
            <StImg src={ShopMain2}>
                <StContentBox>
                        <StTitle>Chill Collection</StTitle>
                        <StMiddle>Premium comfort for any season</StMiddle>
                        <StBtn>SHOP NOW</StBtn>
                        <StDotBox>
                            <StDot onClick={firstDot} img={img}/>
                            <StDot onClick={secondDot} img={img}/>
                            <StDot onClick={thirdDot} img={img}/>
                        </StDotBox>
                </StContentBox>
            </StImg>
            <StImg src={ShopMain3}>
                <StContentBox>
                        <StTitle>Model Y All-Weather Interior Liners</StTitle>
                        <StMiddle>For maximum protection and durability</StMiddle>
                        <StBtn>SHOP NOW</StBtn>
                        <StDotBox>
                            <StDot onClick={firstDot} img={img}/>
                            <StDot onClick={secondDot} img={img}/>
                            <StDot onClick={thirdDot} img={img}/>
                        </StDotBox>
                </StContentBox>
            </StImg>
        </StImgSlideContainer>
    </div>
    
  )
}

const StImgSlideContainer = styled.div`
    position: relative;
    display: flex;
    width: 300vw;
    height: 100vh;
    overflow: hidden;
    transition: 0.5s ease-in-out;
    transform : translate(${props => props.img}vw);
`;

const StImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.src});
    background-size: cover;
    float: left;
`;

const StContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 800px;
    height: 200px;
    margin-bottom: 20px;
`;

const StTitle = styled.h1`
    font-family: text;
    font-size: 40px;
    color: white;
`;

const StMiddle = styled.h2`
    color: white;
    font-family: text;
    font-size: 25px;
`;

const StBtn = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 25px;
    border: none;
    font-family: text;
`;

const StDotBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50px;
`;

const StDot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    &:hover{
        cursor: pointer;
    }
    &:nth-child(1){
        opacity: ${props => props.img === 0 ? "1" : "0.2"}
    }
    &:nth-child(2){
        opacity: ${props => props.img === -100 ? "1" : "0.2"}
    }
    &:nth-child(3){
        opacity: ${props => props.img === -200 ? "1" : "0.2"}
    }
`;

export default ShopImgSlide;
