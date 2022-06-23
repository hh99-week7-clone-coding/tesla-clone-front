import React, { useState } from 'react';
import Styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


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
                            onClick={()=>{
                                PrevBtn();
                            }}><FontAwesomeIcon icon={faAngleLeft} /></StBtn1>
                            <StBtn2 
                            onClick={()=>{
                                NextBtn();
                            }}><FontAwesomeIcon icon={faAngleRight} /></StBtn2>
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
                            <StBtn1 
                            onClick={()=>{
                                PrevBtn();
                            }}><FontAwesomeIcon icon={faAngleLeft} /></StBtn1>
                            <StBtn2 
                            onClick={()=>{
                                NextBtn();
                            }}><FontAwesomeIcon icon={faAngleRight} /></StBtn2>
                        
                        </StSlideWrapper>
                    </StSlideBox>
                </>
            )
        }
    }

const StSlideBox = Styled.div`
    overflow: hidden;
    display: flex;
    
`;

const StSlideWrapper = Styled.div`   
    width: 50vw;
`;


const StInner = Styled.div`
    width: 25vw;
    position: fixed;
    float: left;
    overflow: hidden;
    transition: transform 0.5s;
`;

const StImg = Styled.img`
    width: 100%;
    position: relative;
    margin-top: 150px;
    display: inline;
`;

const StBtnWrap = Styled.div`
    position: absolute;
    positon: fixed;
    display: flex;
    justify-content: space-between;
    font-family: "text";
`;

const StBtn1 = Styled.div`
    position: fixed;
    width: 100px;
    height: 100px;
    font-family: "text";
    font-size: 150px;  
    &:hover{    
    cursor: pointer;
    }
`;

const StBtn2 = Styled.div`
    position: fixed;
    width: 500px;
    height: 100px;    
    font-family: "text";
    font-size: 150px;
    &:hover{    
    cursor: pointer;
}
`;

export default CategoryImgSlide;