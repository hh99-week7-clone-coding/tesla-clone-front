import React, { useState } from 'react';
import Styled from 'styled-components';


const CategoryImgSlide = ({title, url1, url2}) => {


    const ImgList = [url1, url2];

    const [ count, setCount ] = useState(0);

    const PrevBtn = () => {
        if(count !== 0){
            setCount(count - 1);
        } else {
            setCount(0);
        }
    }

    const NextBtn = () => {
        if (count !== 1) {
            setCount(count + 1);
        } else{
            setCount(0);
        }
    }

    if (count === 0) {
        return (
            <>
                <StSlideBox>
                    <StSlideWrapper>
                        <StInner>
                            <StImg
                            alt={title}
                            src={ImgList[count]}
                            />
                        </StInner>
                        <StBtnWrap>
                            <StBtn1 
                            ></StBtn1>
                            <StBtn2 
                            onClick={()=>{
                                NextBtn();
                            }}></StBtn2>
                        </StBtnWrap>
                    </StSlideWrapper>
                </StSlideBox>
            </>
        )
    }

    else if (count === 1){
        return (
                <>
                    <StSlideBox>
                        <StSlideWrapper>
                            <StInner>
                                <StImg
                                alt={title}
                                src={ImgList[count]}
                                />
                            </StInner>
                            <StBtnWrap>
                                <StBtn1 
                                onClick={()=>{
                                    PrevBtn();
                                }}></StBtn1>
                                <StBtn2 
                                onClick={()=>{
                                    NextBtn();
                                }}></StBtn2>
                            </StBtnWrap>
                        </StSlideWrapper>
                    </StSlideBox>
                </>
            )
        }
    }

const StSlideBox = Styled.div`
    overflow: hidden;
`;

const StSlideWrapper = Styled.div`
    width: 100vw;
    position: relative;
    transition: transform 0.5s; 
`;


const StInner = Styled.div`
  width: 50vw;
  float: left;
  display: table;
  overflow: hidden;
`;

const StImg = Styled.img`
  width: 100%;
`;

const StBtnWrap = Styled.div`
    position: absolute;
    positon: fixed;
    display: flex;
    justify-content: space-between;
    font-family: "text";
`;

const StBtn1 = Styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: green;
  font-family: "text";
  &:hover{    
    cursor: pointer;
  }
`;

const StBtn2 = Styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: green;
  font-family: "text";
  &:hover{    
    cursor: pointer;
  }
`;

export default CategoryImgSlide;