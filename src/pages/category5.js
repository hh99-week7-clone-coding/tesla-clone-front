import React from 'react'
import Styled from 'styled-components';
import ModelY from '../components/Category/ModelY';

const Category5 = () => {

    return (
        <> 
        <Wrap> 
            <StContainer>
                <StTitleWrap>
                    <StTitle>Model Y</StTitle>
                    <StCardTitle>Best Sellers</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    <ModelY
                        url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg"
                        ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_1.jpg"
                        title="Model Y All-Weather Interior Liners"
                        cost="$225"/>
                </StCardAlign>
            </StContainer>
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Interior</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    <ModelY
                        url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg"
                        ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_1.jpg"
                        title="Model Y All-Weather Interior Liners"
                        cost="$225"/>
                </StCardAlign>
            </StContainer>
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Exterior</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    <ModelY
                        url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg"
                        ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_1.jpg"
                        title="Model Y All-Weather Interior Liners"
                        cost="$225"/>
                </StCardAlign>
            </StContainer>
        </Wrap>
    </>
    )
}

const Wrap = Styled.div `
  width: 100%;
  height: 100vh;
  display: column;
`;

const StContainer = Styled.div `
  margin: 60px auto;
  display: block;
  background-color: white;
`;

const StTitleWrap = Styled.div `
  padding: 2px 0px 0px;
  margin-left: 60px;
`;

const StCardAlign = Styled.ul `
justify-content: start;
display: flex;
flex-wrap: wrap;
`;

const StTitle = Styled.h1 `
  display: block;
  font-size: 30px;
  font-family: "text";
  line-height: 40px;
  font-weight: 700;
  padding: 0;
`;

const StCardTitle = Styled.h2 `
  font-family: "text";
  font-weight: 700;
  font-size: 25px;
  line-height: 40px;  
  margin-top: 30px; 
  position: absolute;
`;

export default Category5;
