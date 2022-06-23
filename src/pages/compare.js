import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import { StContainer } from '../components/Styles';
import '../components/Styles.jsx';
import { StTitle, StText } from '../components/Styles';
import CompareVehicle from '../components/CompareVehicle';


const Compare = () => {
  return (
    <>
        <Header/>
        <StContainer>
            <StContentContainer>
                <StTitle>Compare Models</StTitle>
                <StCompareBox>
                    <CompareVehicle/>
                    <CompareVehicle/>
                    <CompareVehicle/>
                </StCompareBox>
            </StContentContainer>
        </StContainer>
    </>
  )
}

const StContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    height: 1500px;
    margin-top: 13vh;
    margin-bottom: 50px;
`;

const StCompareBox = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
`;

export default Compare;