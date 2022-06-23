import React,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { costBtnClick } from "../redux/modules/vehicleDetail";
import { StLink } from "./Styles";

const VehicleDetailTextBox = ({vehicle1Name, vehicle2Name, rangeMiles1, rangeMiles2, topSpeed1, topSpeed2, acceleration1, acceleration2, basePrice1, basePrice2, savingPrice1, savingPrice2}) => {

    const dispatch = useDispatch();

    const [btnClicked, setBtnClicked] = useState(false);
    const [costBtnClicked, setCostBtnClicked] = useState(false);

    const onClickBtn1 = () => {
        setBtnClicked(false)
    }

    const onClickBtn2 = () => {
        setBtnClicked(true);
    }

    const onCostBtn1Click = () => {
        setCostBtnClicked(false)
        dispatch(costBtnClick(false))
    }

    const onCostBtn2Click = () => {
        setCostBtnClicked(true)
        dispatch(costBtnClick(true))
    }

  return (
    <StTextBox>
                <StGrayBox>
                    <FontAwesomeIcon icon={faCircleInfo} size="2x" style={{ marginRight:"10px", color:"#3e6ae1"}}/>
                    <StSpan>$750 Clean Fuel Reward is now available for California residents.</StSpan>
                </StGrayBox>
                { costBtnClicked ? (<StTitle>{vehicle2Name}</StTitle>) : (<StTitle>{vehicle1Name}</StTitle>)}
                <StSpan>Est. Delivery: Jan 2023 - Apr 2023</StSpan>
                <StBtnBox>
                    <StBtn1 onClick={onClickBtn1} clicked={btnClicked}>Purchase Price</StBtn1>
                    <StBtn2 onClick={onClickBtn2} clicked={btnClicked}>Potential Savings</StBtn2>
                </StBtnBox>
                { costBtnClicked ? 
                
                (<StInfoBox>
                    <StInfoInnerBox>
                        <StInfoTitle>
                            <StInfo>{rangeMiles2}</StInfo>
                            <span styled={{fontFamily:"text"}}>mi</span>
                        </StInfoTitle>
                        <StInfoText>Range (est.)</StInfoText>
                    </StInfoInnerBox>
                    <StInfoInnerBox>
                        <StInfoTitle>
                            <StInfo>{topSpeed2}</StInfo>
                            <span styled={{fontFamily:"text"}}>mph</span>
                        </StInfoTitle>
                        <StInfoText>Top Speed</StInfoText>
                    </StInfoInnerBox>
                    <StInfoInnerBox>
                        <StInfoTitle>
                            <StInfo>{acceleration2}</StInfo>
                            <span styled={{fontFamily:"text"}}>km/hc</span>
                        </StInfoTitle>
                        <StInfoText>acceleration</StInfoText>
                    </StInfoInnerBox>
                </StInfoBox>) : 
                
                (<StInfoBox>
                    <StInfoInnerBox>
                        <StInfoTitle>
                            <StInfo>{rangeMiles1}</StInfo>
                            <span styled={{fontFamily:"text"}}>mi</span>
                        </StInfoTitle>
                        <StInfoText>Range (est.)</StInfoText>
                    </StInfoInnerBox>
                    <StInfoInnerBox>
                        <StInfoTitle>
                            <StInfo>{topSpeed1}</StInfo>
                            <span styled={{fontFamily:"text"}}>mph</span>
                        </StInfoTitle>
                        <StInfoText>Top Speed</StInfoText>
                    </StInfoInnerBox>
                    <StInfoInnerBox>
                        <StInfoTitle>
                            <StInfo>{acceleration1}</StInfo>
                            <span styled={{fontFamily:"text"}}>km/hc</span>
                        </StInfoTitle>
                        <StInfoText>acceleration</StInfoText>
                    </StInfoInnerBox>
                </StInfoBox>)}
                
                <StCostBox>
                    <StSpan>Dual Motor All-Wheel Drive</StSpan>
                    <StCostBtn1 onClick={onCostBtn1Click} costBtnClicked={costBtnClicked}>
                        <StSpan>{vehicle1Name}</StSpan>
                        {btnClicked ? <StSpan>$ {savingPrice1}</StSpan> : <StSpan>$ {basePrice1}</StSpan>}
                    </StCostBtn1>
                    <StCostBtn2  onClick={onCostBtn2Click} costBtnClicked={costBtnClicked}>
                        <StSpan>{vehicle2Name}</StSpan>
                        {btnClicked ? <StSpan>$ {savingPrice2}</StSpan> : <StSpan>$ {basePrice2}</StSpan>}
                    </StCostBtn2>
                </StCostBox>
                <div style={{width:"85%"}}>
                    <StInfoText>Prices shown include the $750 California Clean Fuel Reward and potential incentives and gas savings for a total of $7,350.</StInfoText>
                </div>
                <StModalBtn><StLink to={`/vehicle/info/${vehicle1Name}`}>FEATURE DETAILS</StLink></StModalBtn>
            </StTextBox>
  )
}



const StTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    min-width: 400px;
    height: 100vh;
    margin-left: 10%;
`;

const StGrayBox = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 7%;
    margin: 20px 0px;
    padding: 10px;
    border-radius: 10px;;
    background-color: #f5f5f5;
    letter-spacing: 1px;
`

export const StSpan = styled.span`
    font-size: 15px;
    margin: 5px;
    font-family: "text";
    margin-top: 10px;
`;

const StTitle = styled.h1`
    font-size: 40px;
    font-family: "text";
    margin-top: 60px;
    color: #171a20;
    transition: 0.2s ease-in-out;
`;

const StBtnBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
    background-color: #f4f4f4;
    border-radius: 20px;
    width: 85%;
    height: 5%;
`;

const StBtn1 = styled.button`
    width: 47%;
    height: 75%;
    background-color: ${props => props.clicked ? "transparent" : "white"};
    border: none;
    border-radius: 20px;
    font-family: "text";
    transition: 0.2s ease-in-out;
    box-shadow:${props => props.clicked ? "transparent" : "0px 2px 4px rgba(0,0,0,0.1)"};
    &:hover{
        cursor: pointer;
    }
`;

const StBtn2 = styled.button`
    width: 47%;
    height: 75%;
    background-color: ${props => props.clicked ? "white" : "transparent"};
    border: none;
    border-radius: 20px;
    font-family: "text";
    transition: 0.2s ease-in-out;
    box-shadow: ${props => props.clicked ? "0px 2px 4px rgba(0,0,0,0.1)" : "transparent"};
    &:hover{
        cursor: pointer;
    }
`;

const StInfoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 40px;
`;

const StInfoInnerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StInfo = styled.h2`
    font-family: "text";
`;

const StInfoTitle = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const StInfoText = styled.span`
    font-family: "text";
    color: rgba(0,0,0,0.5);
    font-size: 14px;
`

const StCostBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 40px 0px;
`;

const StCostBtn1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90%;
    padding: 10px;
    margin: 10px 0px;
    border: 1px solid #a2a3a5;
    border : ${props => props.costBtnClicked ? "1px solid #a2a3a5;" : "3px solid #3e6ae1"};
    border-radius: 30px;
    transition: 0.4s ease-in-out;
    &:hover{
        cursor: pointer;
    }
`;

const StCostBtn2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 90%;
    padding: 10px;
    margin: 10px 0px;
    border:  ${props => props.costBtnClicked ? "3px solid #3e6ae1" : "1px solid #a2a3a5;"};
    border-radius: 30px;
    transition: 0.4s ease-in-out;
    &:hover{
        cursor: pointer;
    }
`;

const StModalBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    width: 40%;
    height: 3%;
    font-family: "text";
    font-size: 14px;
    border-radius: 20px;
    margin-top: 20px;
    &:hover{
        background-color: rgba(0,0,0,0.1);
        cursor: pointer;;
    }
`;

export default VehicleDetailTextBox;
