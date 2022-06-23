import React, { useState } from 'react'
import styled from 'styled-components';
import { StText, StLink } from '../components/Styles';
import { useGetVehicleDetail } from "../Hooks/useGetVehicleDetail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CompareVehicle = () => {

    const [selectValue, setSelectValue] = useState(1);
    const [btnClicked, setBtnClicked] = useState(false);

    const selectChange = (event) => {
        setSelectValue(event.target.value)
    }

    const onIconClick = () => {
        if(btnClicked === false){
            setBtnClicked(true)
        } else {
            setBtnClicked(false)
        }
    }

    const { data } = useGetVehicleDetail(selectValue)
    const vehicleImg = data?.imageUrl.split(",,")[0]

    return (
    <StCompareBox>
        <StImgBox src={vehicleImg}/>
        <StInfoBox>
            <StInfo>
                <StSelect name="vehicleSelect" onChange={selectChange}>
                    <optgroup label="model S">
                        <option value={1}>Model S</option>
                        <option value={2}>Model S Plaid</option>
                    </optgroup>
                    <optgroup label="model 3">
                        <option value={3}>Model 3 Rear-Wheel Drive</option>
                        <option value={4}>Model 3 Long Range</option>
                        <option value={5}>Model 3 Performance</option>
                    </optgroup>
                    <optgroup label="model X">
                        <option value={6}>Model X</option>
                        <option value={7}>Model X Plaid</option>
                    </optgroup>
                    <optgroup label="model Y">
                        <option value={8}>Model Y Long Range</option>
                        <option value={9}>Model Y Performance</option>
                    </optgroup>
                </StSelect>
            </StInfo>
            <StInfo>
                <StInfoSmall>Base Price</StInfoSmall>
                <div>
                    <StInfoBig>$ {data?.basePrice}</StInfoBig>
                </div>
            </StInfo>
            <StInfo>
                <StInfoSmall>Range</StInfoSmall>
                <div>
                    <StInfoBig>{data?.rangeMiles}</StInfoBig>
                    <StInfoMiddle>miles (EPA est.)</StInfoMiddle>
                </div>  
            </StInfo>
            <StInfo>
                <StInfoSmall>Seating up to</StInfoSmall>
                <div>
                    <StInfoBig>{data?.seating}</StInfoBig>
                    <StInfoMiddle>seats</StInfoMiddle>
                </div>  
            </StInfo>
            <StInfo>
                <StInfoSmall>Cargo Capacity</StInfoSmall>
                <div>
                    <StInfoBig>{data?.cargoCapacity}</StInfoBig>
                    <StInfoMiddle>cu ft</StInfoMiddle>
                </div>
            </StInfo>
            <StInfo>
                <StInfoSmall>Drive</StInfoSmall>
                <div>
                    <StInfoBig>{data?.drive}</StInfoBig>
                </div>
            </StInfo>
            <StIconBox  onClick={onIconClick}>
                <FontAwesomeIcon icon={faPlus} style={{marginRight:"10px",marginBottom:"10px"}}/>
                <StText>See more</StText>
            </StIconBox>
            { btnClicked ? 
            (<StHideBox>
                <StInfo>
                    <StInfoSmall>Acceleration</StInfoSmall>
                    <div>
                        <StInfoBig>{data?.acceleration}s</StInfoBig>
                        <StInfoMiddle>0-60 mph</StInfoMiddle>
                    </div>
                </StInfo>
                <StInfo>
                    <StInfoSmall>Top Speed</StInfoSmall>
                    <div>
                        <StInfoBig>{data?.topSpeed}</StInfoBig>
                        <StInfoMiddle>mph</StInfoMiddle>
                    </div>
                </StInfo>
            </StHideBox>) : <div></div>}
            
            <StLink to={`/vehicle/${selectValue}`}><StBtn>ORDER NOW</StBtn></StLink>
        </StInfoBox>
    </StCompareBox>
  )
}

const StCompareBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 900px;
    width: 50%;
    margin-top: 30px;
`;

const StImgBox = styled.img`
    width: 100%;
`;

const StInfoBox = styled.div`
    width: 82%;
    height: 70%;
`;

const StInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 17%;
`;

const StSelect = styled.select`
    width: 100%;
    height: 80%;
    font-family: text;
    font-size: 24px;
    font-weight: bold;
    border: none;
`;

const StInfoSmall = styled.span`
    color: rgba(0,0,0,0.5);
    font-size: 15px;
    font-family: text;
`;

const StInfoBig = styled.span`
    color: black;
    font-size: 28px;
    font-weight: bold;
    font-family: text;
`;

const StInfoMiddle = styled.span`
    color: rgba(0,0,0,0.7);
    font-size: 18px;
    font-weight: bold;
    font-family: text;
    margin-left: 10px;
`;

const StHideBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    margin-top: 15%;
`;

const StBtn = styled.button`
    width: 45%;
    height: 40px;
    margin-top: 60px;
    border: 3px solid black;
    border-radius: 20px;
    background-color: white;
    font-family: text;
    &:hover{
        cursor: pointer;
        background-color: black;
        color: white;
    }
`;

const StIconBox = styled.div`
    width: 75%;
    height: 50px;
    display: flex;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;


export default CompareVehicle;
