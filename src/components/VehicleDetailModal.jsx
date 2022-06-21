import React from 'react'
import styled from 'styled-components';
import "../pages/style/vehicleDetail.css";
import { StInfo, StSpan, StInfoText } from "./VehicleDetailTextBox";

const VehicleDetailModal = () => {
  return (
        <StModalBox>
            <StInfo>Finance Options</StInfo>
            <StSpan>Financing selection and terms will be confirmed after order</StSpan>
            <StTable>
                <tbody>
                    <tr>
                    <StTd>
                        <StTableH3>Vehicle Price</StTableH3>
                    </StTd>
                    <StTd>
                        <StTableH3>$59,490</StTableH3>
                    </StTd>
                    </tr>
                    <tr>
                        <td>
                            <StInfoText>Incentives</StInfoText>
                        </td>
                        <td>
                            <StInfoText>- $750</StInfoText>
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <StInfoText>Est. 6-year gas savings</StInfoText>
                    </td>
                    <td>
                        <StInfoText>- $6,600</StInfoText>
                    </td>
                    </tr>
                    <tr>
                    <StTd>
                        <StSpan>Price after potential savings</StSpan>
                    </StTd>
                    <StTd>
                        <StSpan>$52,140</StSpan>
                    </StTd>
                    </tr>
                    <tr>
                    <td>
                        <StInfoText>Destination & doc fee</StInfoText>
                    </td>
                    <td>
                        <StInfoText>$1,200</StInfoText>
                    </td>
                    </tr>
                </tbody>
            </StTable>
            <StInfoText>Electric vehicles are eligible for various financial incentives and other owner benefits that are unavailable to gas cars. Learn more about state and utility provider incentives in your area.</StInfoText>
        </StModalBox>
  ) 
}

const StModalBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 750px;
    height: 400px;
    padding: 40px;
    background-color: white;
    border-radius: 20px;
    animation: modalOpening 0.4s ease-in-out;
`;

const StTable = styled.table`
    width: 100%;
    height: 60%;
`;

const StTd = styled.td`
    border-bottom: 1px solid rgba(0,0,0,0.2);
    margin: 0;
`;

const StTableH3 = styled.h3`
    font-family: "text";
    font-size: 18px;
    color: black;
`;


export default VehicleDetailModal;