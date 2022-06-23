import React, { useState } from 'react';
import Styled from 'styled-components';

const Detail = ( { url1, url2, title, cost, desc } ) => {


    const [ number , setNumber ] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }

    return (
        <>
            <Wrap>
                <StPruductContainer>
                    <StH2>{title}</StH2>
                </StPruductContainer>
                <StPruductContainer>
                    <StP>{cost}</StP>
                </StPruductContainer>
                <StPruductContainer>
                    <StP2>Quantity</StP2>
                    <StSmallBtnWrap>
                        <StPlusMinusBtn onClick={()=>{
                            onDecrease();
                        }}>-</StPlusMinusBtn>
                        <StCount>{number}</StCount>
                        <StPlusMinusBtn onClick={()=>{
                            onIncrease();
                        }}>+</StPlusMinusBtn>
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
    margin-top: 50px;   
    display: column;
    position: relative;
`;


const StPruductContainer = Styled.div`
    margin-left: 30px;
    margin-top: 30px;
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
    margin-top: 150px;
`;

const StDesc = Styled.p`
    font-family: "text";
    font-size: 20px;
    margin-top: 30px;
`;
export default Detail;