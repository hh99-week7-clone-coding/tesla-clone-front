import React from 'react';
import Styled from 'styled-components';

const Detail = ( { url1, url2, title, cost, desc } ) => {



    return (
        <>
            <Wrap>
                <StSlideBox>
                    <StSlideWrapper>
                        <StSlideList>
                            <StInner>
                                <StImg 
                                alt={title}
                                src={url1}/>
                            </StInner>
                            <StInner>
                                <StImg
                                alt={title}
                                src={url2}/>
                            </StInner>
                        </StSlideList>
                        <StBtnWrap>
                            <StBtn1>PrevButton</StBtn1>
                            <StBtn2>NextButton</StBtn2>
                        </StBtnWrap>
                    </StSlideWrapper>
                </StSlideBox>
                <StPruductContainer>
                    <StH2>{title}</StH2>
                </StPruductContainer>
                <StPruductContainer>
                    <StP>{cost}</StP>
                </StPruductContainer>
                <StPruductContainer>
                    <StP2>Quantity</StP2>
                    <StSmallBtnWrap>
                        <StPlusMinusBtn>-</StPlusMinusBtn>
                        <StCount>1</StCount>
                        <StPlusMinusBtn>+</StPlusMinusBtn>
                        <StAddBtn>
                        Add To Cart
                        </StAddBtn>
                    </StSmallBtnWrap>
                    <StDescWrap>
                        <StP>Description</StP>
                        <StDesc>{desc}</StDesc>
                    </StDescWrap>
                </StPruductContainer>
            </Wrap>
        </>
    )
};

const Wrap = Styled.div`
    margin-top: 150px;
    position: relative;
`;


const StSlideBox = Styled.div`
    position: relative;
    width: 500px;
    
    
`;

const StSlideWrapper = Styled.div`
    width: 200vw;
    transition: all 300ms ease 0s;
    
    
`;

const StSlideList = Styled.div`
    width: 100vw;
`;

const StInner = Styled.div`
  width: 50vw;
  float: left;
  display: table;
`;

const StImg = Styled.img`
  width: 100%;
`;

const StBtnWrap = Styled.div`
  display: flex;
  justify-content: start;
  font-family: "text";
`;

const StBtn1 = Styled.div`
  width: 200px;
  height: 50px;
  background-color: green;
  font-family: "text";
`;
const StBtn2 = Styled.div`
  width: 200px;
  height: 50px;
  background-color: green;
  font-family: "text";
`;


const StPruductContainer = Styled.div`
    margin-left: 30px;
`;

const StH2 = Styled.h2`
    font-family: "text";
    font-size: 40px;
`;

const StP = Styled.p`
    font-family: "text";
    font-size: 30px;
    font-weight: bold;
`;

const StP2 = Styled.p`
    margin-top: 30px;
    font-family: "text";
    font-size: 30px;
    font-weight: bold;
`;

const StSmallBtnWrap = Styled.div`
    display: flex;
    margin: 10px 20px auto;
    
`;

const StPlusMinusBtn = Styled.div`
    margin: 10px;
    border-color: white;
    background-color: white;
    &:hover{    
    cursor: pointer;
    }
    font-family: "text";
    font-weight: bold;
    font-size: 20px;

`;

const StCount = Styled.p`
    font-family: "text";
    margin-top: 10px;
`;

const StAddBtn = Styled.div`
    width: 320px;
    height: 40px;
    margin-top: 100px;
    background-color: #3457b2;
    border-radius: 40px;
    color: white;
    font-family: "text";
    font-size: 25px;
    padding-top: 10px;
    padding-left: 160px;
    padding-right: -80px;
    &:hover{    
    cursor: pointer;
    }
`;

const StDescWrap = Styled.div`
    margin-top: 50px;
`;

const StDesc = Styled.p`
    font-family: "text";
    font-size: 20px;
    margin-top: 30px;
`;
export default Detail;