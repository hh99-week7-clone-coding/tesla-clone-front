import React, { useState }  from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ImgSlide from '../components/ImgSlide';
import VehicleDetailTextBox from '../components/VehicleDetailTextBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { StSpan, StInfoText } from "../components/VehicleDetailTextBox";
import { StLink, StLogo } from "../components/Styles";
import VehicleDetailModal from '../components/VehicleDetailModal';
import "./style/vehicleDetail.css";
import { useGetVehicleDetail } from "../Hooks/useGetVehicleDetail";

const VehicleDetail = () => {

    const vehicleId = useParams().vehicleName;
    const nextVehicleId = Number(vehicleId) + 1

    const { data } = useGetVehicleDetail(vehicleId);
    const nextData = useGetVehicleDetail(nextVehicleId).data
    const savingPrice1 = data?.basePrice - 7350
    const savingPrice2 = nextData?.basePrice - 7350

    const [modalOpen, setModalOpen] = useState(false);

    const onModalOpen = () => {
        setModalOpen(true)
    }

    const onModalClose = () => {
        setModalOpen(false)
    }

    const btnClicked = useSelector(state => state.vehicleDetail.costBtnClicked)

  return (
    <>
        <StModalBackground onClick={onModalClose} modalOpen={modalOpen}>
            <VehicleDetailModal 
                basePrice1={data?.basePrice} 
                basePrice2={nextData?.basePrice}
                savingPrice1={savingPrice1}
                savingPrice2={savingPrice2}/>
        </StModalBackground>
        <StLink to={'/'}><StLogo>TESLA</StLogo></StLink>
        <StDetailBox>
            <ImgSlide image1Url={data?.imageUrl} image2Url={nextData?.imageUrl}/>
            <VehicleDetailTextBox
                vehicle1Name={data?.vehicleName}
                vehicle2Name={nextData?.vehicleName}
                rangeMiles1={data?.rangeMiles}
                rangeMiles2={nextData?.rangeMiles}
                topSpeed1={data?.topSpeed}
                topSpeed2={nextData?.topSpeed}
                acceleration1={data?.acceleration}
                acceleration2={nextData?.acceleration}
                basePrice1={data?.basePrice}
                basePrice2={nextData?.basePrice}
                savingPrice1={savingPrice1}
                savingPrice2={savingPrice2}
                vehicle2/>
        </StDetailBox>

        { btnClicked ? 
        (<StModalBtn onClick={onModalOpen}>
            <StIconBox>
                <FontAwesomeIcon icon={faArrowDown} style={{color:"rgba(0,0,0,0.5"}}/>
            </StIconBox>
            <StSpan>${nextData?.basePrice} Vehicle Price</StSpan>
            <StInfoText>|</StInfoText>
            <StInfoText>$ {savingPrice2} After potential savings</StInfoText>
        </StModalBtn>) : 
        
        (<StModalBtn onClick={onModalOpen}>
            <StIconBox>
                <FontAwesomeIcon icon={faArrowDown} style={{color:"rgba(0,0,0,0.5"}}/>
            </StIconBox>
            <StSpan>${data?.basePrice} Vehicle Price</StSpan>
            <StInfoText>|</StInfoText>
            <StInfoText>$ {savingPrice1} After potential savings</StInfoText>
        </StModalBtn>)}
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
