import React from 'react'
import Styled from 'styled-components';
import Kids from '../components/Category/Kids';

const Category8 = () => {

    return (
        <> 
        <Wrap> 
            <StContainer>
                <StTitleWrap>
                    <StTitle>Kids</StTitle>
                    <StCardTitle>Best Sellers</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    <Kids
                        url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_0_2000.jpg"
                        ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_1.jpg"
                        title="Kids Cyberquad Bomber Jacket"
                        cost="$65"/>
                </StCardAlign>
            </StContainer>
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Tees</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    <Kids
                        url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_0_2000.jpg"
                        ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_1.jpg"
                        title="Kids Cyberquad Bomber Jacket"
                        cost="$65"/>
                </StCardAlign>
            </StContainer>
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Onesies</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    <Kids
                        url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_0_2000.jpg"
                        ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_1.jpg"
                        title="Kids Cyberquad Bomber Jacket"
                        cost="$65"/>
                </StCardAlign>
            </StContainer>
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Outerwear</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    <Kids
                        url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_0_2000.jpg"
                        ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_1.jpg"
                        title="Kids Cyberquad Bomber Jacket"
                        cost="$65"/>
                </StCardAlign>
            </StContainer>            
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Hats</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    <Kids
                        url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_0_2000.jpg"
                        ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_1.jpg"
                        title="Kids Cyberquad Bomber Jacket"
                        cost="$65"/>
                </StCardAlign>
            </StContainer>
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Socks</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    <Kids
                        url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_0_2000.jpg"
                        ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_1.jpg"
                        title="Kids Cyberquad Bomber Jacket"
                        cost="$65"/>
                </StCardAlign>
            </StContainer>
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Keys</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    <Kids
                        url="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_0_2000.jpg"
                        ChangeUrl="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/KIDS/TOPS/1742702-00-A_1.jpg"
                        title="Kids Cyberquad Bomber Jacket"
                        cost="$65"/>
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

export default Category8;
