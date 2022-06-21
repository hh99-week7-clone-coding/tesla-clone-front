import React, { useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import image
import model3_1 from "../image/detail/model3/detail-model3-1.jfif";
import model3_2 from "../image/detail/model3/detail-model3-2.jfif";
import model3_3 from "../image/detail/model3/detail-model3-3.jfif";
import model3_4 from "../image/detail/model3/detail-model3-4.jfif"

const ImgSlide = () => {

    const Img1 = model3_1
    const Img2 = model3_2
    const Img3 = model3_3
    const Img4 = model3_4

    const [imgNum, setImgNum] = useState(0);

    const onClickLeftArrow = () => {
        if(imgNum !== 0){
            setImgNum(imgNum - 1)
        } else {
            setImgNum(0)
        }
    }

    const onClickRightArrow = () => {
        if(imgNum !== 3){
            setImgNum(imgNum + 1)
        } else {
            setImgNum(3)
        }
    }

    if(imgNum === 0){
        return (
            <>
                <StLeftArrow onClick={onClickLeftArrow}><FontAwesomeIcon icon={faArrowLeft}/></StLeftArrow>
                <StImgBox img={Img1}/>
                <StRightArrow onClick={onClickRightArrow}><FontAwesomeIcon icon={faArrowRight}/></StRightArrow>
            </>   
        )}
    else if(imgNum === 1){
        return (
            <>
                <StLeftArrow onClick={onClickLeftArrow}><FontAwesomeIcon icon={faArrowLeft}/></StLeftArrow>
                <StImgBox img={Img2}/>
                <StRightArrow onClick={onClickRightArrow}><FontAwesomeIcon icon={faArrowRight}/></StRightArrow>
            </>   
          )
    }  
    else if(imgNum === 2){
        return (
            <>
                <StLeftArrow onClick={onClickLeftArrow}><FontAwesomeIcon icon={faArrowLeft}/></StLeftArrow>
                <StImgBox img={Img3}/>
                <StRightArrow onClick={onClickRightArrow}><FontAwesomeIcon icon={faArrowRight}/></StRightArrow>
            </>
        )
    }
    else if(imgNum === 3){
        return (
            <>
                <StLeftArrow onClick={onClickLeftArrow}><FontAwesomeIcon icon={faArrowLeft}/></StLeftArrow>
                <StImgBox img={Img4}/>
                <StRightArrow onClick={onClickRightArrow}><FontAwesomeIcon icon={faArrowRight}/></StRightArrow>
            </>
        )
    }
  
}

const StLeftArrow = styled.div`
    position: fixed;
    top: 50%;
    left: 2%;
    display:  flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #f4f4f4;
    border-radius: 50%;
    z-index: 3;
    &:hover{
        cursor: pointer;
    }
`;

const StRightArrow = styled.div`
    position: fixed;
    top: 50%;
    right: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #f4f4f4;
    border-radius: 50%;
    z-index: 3;
    &:hover{
        cursor: pointer;
    }
`;

const StImgBox = styled.div`
    position: fixed;
    top : 5vh;
    left: 1vw;
    background-image : ${props => `url(${props.img})`};
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 70%;
    height: 100%;
    transition: 0.5s ease-in-out;
`;

export default ImgSlide;