import React from 'react'
import Styled from 'styled-components';
import Charging from '../components/Category/Charging';



const category1 = () => {


  return (
    <>
    <Wrap>
      <StContainer>
        <StTitleWrap>
          <StTitle>Charging</StTitle>
          <StCardTitle>At Home</StCardTitle>
        </StTitleWrap>
        <StCardAlign>
          <Charging 
          url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_0_2000.jpg"
          ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-02-G_alt.jpg"
          title="Wall Connect"
          cost="$400"
          />
        </StCardAlign>
      </StContainer>
      <StContainer>
        <StTitleWrap>          
          <StCardTitle>On the Road</StCardTitle>
        </StTitleWrap>
        <StCardAlign>
        <Charging 
          url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_0_2000.jpg"
          ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-02-G_alt.jpg"
          title="Wall Connect"
          cost="$400"
          />
        </StCardAlign>
      </StContainer>
      <StContainer>
        <StTitleWrap>          
          <StCardTitle>Parts</StCardTitle>
        </StTitleWrap>
        <StCardAlign>
        <Charging 
          url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-01-F_0_2000.jpg"
          ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-02-G_alt.jpg"
          title="Wall Connect"
          cost="$400"
          />
        </StCardAlign>
      </StContainer>
    </Wrap>
    </>
  )
}

const Wrap = Styled.div`
  max-width: 1200px;
  height: 100vh;
  display: column;
`;

const StContainer = Styled.div`
  margin: 60px auto;
  display: block;
  background-color: white;
`;

const StTitleWrap = Styled.div`
  padding: 2px 0px 0px;
  margin-left: 60px;
`;

const StTitle = Styled.h1`
  display: block;
  font-size: 30px;
  font-family: "text";
  line-height: 40px;
  font-weight: 700;
  padding: 0;
`;

const StCardAlign = Styled.ul`
  justify-content: start;
  display: flex;
  flex-wrap: wrap;
`;

const StCardTitle = Styled.h2`
  font-family: "text";
  font-weight: 700;
  font-size: 25px;
  line-height: 40px;  
  margin-top: 30px; 
  position: absolute;
`;



export default category1;
