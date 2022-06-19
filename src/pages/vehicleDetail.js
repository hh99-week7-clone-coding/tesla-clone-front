import React, { useState }  from 'react'
import styled from 'styled-components';
import ImgSlide from '../components/ImgSlide';
import VehicleDetailTextBox from '../components/VehicleDetailTextBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { StSpan, StInfoText } from "../components/VehicleDetailTextBox";
import { StLink } from "../components/Header";
import VehicleDetailModal from '../components/VehicleDetailModal';
import "./style/vehicleDetail.css";

const VehicleDetail = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onModalOpen = () => {
        setModalOpen(true)
    }

    const onModalClose = () => {
        setModalOpen(false)
    }

  return (
    <>
        <StModalBackground onClick={onModalClose} modalOpen={modalOpen}>
            <VehicleDetailModal/>
        </StModalBackground>
        <StLink to={'/'}><StLogo>TESLA</StLogo></StLink>
        <StDetailBox>
            <ImgSlide/>
            <VehicleDetailTextBox/>
        </StDetailBox>
        <StModalBtn onClick={onModalOpen}>
            <StIconBox>
                <FontAwesomeIcon icon={faArrowDown} style={{color:"rgba(0,0,0,0.5"}}/>
            </StIconBox>
            <StSpan>$59,490 Vehicle Price</StSpan>
            <StInfoText>|</StInfoText>
            <StInfoText>$52,140 After potential savings</StInfoText>
        </StModalBtn>
    </>
  )
}

const StDetailBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0px auto;
    width: 95vw;
    animation: mounting 1s ease-in-out;
`;

export const StLogo = styled.h1`
    position: fixed;
    top: 3vh;
    left: 2vw;
    font-family: 'Logo';
    font-size: 18px;
    letter-spacing: 10px;
    &:hover{
        cursor: pointer;
    }
`;

const StModalBtn = styled.div`
    position: fixed;
    bottom : 0px;
    left: 25%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 550px;
    height: 70px;
    background-color: #f4f4f4;
    border-radius: 20px 20px 0px 0px;
    &:hover{
        cursor: pointer;
    }
`;

const StIconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.3);
`;

export const StModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => props.modalOpen ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    &:hover{
        cursor: pointer;
    }
`;

export default VehicleDetail;
