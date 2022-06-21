import React, { useState } from 'react'
import styled from 'styled-components';
import { StSectionContainer, StInfoBig, StInfoSmall, StBoldText } from '../Styles';

const Section4 = ({img, title, range1, range2, peakPower1, peakPower2, wheels1, wheels2, cargo1, cargo2, acceleration1, acceleration2, topSpeed1, topSpeed2, drag1, drag2, weight1, weight2, powertrain1, powertrain2, supercharging1, supercharging2, btn1, btn2 }) => {

    const [btnClick, setBtnClick] = useState(false);

  const btn1ClickHandler = () => {
    setBtnClick(false)
  }
  const btn2ClickHandler = () => {
    setBtnClick(true)
  }

  return (
    <>
        <StSectionContainer backgroundColor="black">
        <StSection4ImgBox img={img}/>
        <StSection4InfoBox>
          <StInfoBig>{title}</StInfoBig>
          <StSection4BtnBox>
            <StSection4Btn1 onClick={btn1ClickHandler} btnClick={btnClick}>{btn1}</StSection4Btn1>
            <StSection4Btn2 onClick={btn2ClickHandler} btnClick={btnClick}>{btn2}</StSection4Btn2>
          </StSection4BtnBox>
          { btnClick ? (
             <div style={{width:"90%", height:"100%", display:"flex"}}>
             <StSection4TextBox>
               <StSection4InnerTextBox>
                 <StHr/>
                 <StBoldText>Range (EPA est.)</StBoldText>
                 <StInfoSmall>{range1} mi</StInfoSmall>
               </StSection4InnerTextBox>
               <StSection4InnerTextBox>
                 <StHr/>
                 <StBoldText>Peak Power</StBoldText>
                 <StInfoSmall>{peakPower1} hp</StInfoSmall>
               </StSection4InnerTextBox>
               <StSection4InnerTextBox>
                 <StHr/>
                 <StBoldText>Wheels</StBoldText>
                 <StInfoSmall>{wheels1}</StInfoSmall>
               </StSection4InnerTextBox>
               <StSection4InnerTextBox>
                 <StHr/>
                 <StBoldText>Cargo</StBoldText>
                 <StInfoSmall>{cargo1}</StInfoSmall>
               </StSection4InnerTextBox>
               <StSection4InnerTextBox>
                 <StHr/>
                 <StBoldText>Acceleration</StBoldText>
                 <StInfoSmall>{acceleration1} mph</StInfoSmall>
               </StSection4InnerTextBox>
             </StSection4TextBox>
             <StSection4TextBox>
               <StSection4InnerTextBox>
                 <StHr/>
                 <StBoldText>Top Speed</StBoldText>
                 <StInfoSmall>{topSpeed1} mph</StInfoSmall>
               </StSection4InnerTextBox>
               <StSection4InnerTextBox>
                 <StHr/>
                 <StBoldText>Drag Coefficient</StBoldText>
                 <StInfoSmall>{drag1} Cd</StInfoSmall>
               </StSection4InnerTextBox>
               <StSection4InnerTextBox>
                 <StHr/>
                 <StBoldText>Weight</StBoldText>
                 <StInfoSmall>{weight1} lbs</StInfoSmall>
               </StSection4InnerTextBox>
               <StSection4InnerTextBox>
                 <StHr/>
                 <StBoldText>Powertrain</StBoldText>
                 <StInfoSmall>{powertrain1}</StInfoSmall>
               </StSection4InnerTextBox>
               <StSection4InnerTextBox>
                 <StHr/>
                 <StBoldText>Supercharging Max</StBoldText>
                 <StInfoSmall>{supercharging1} kW</StInfoSmall>
               </StSection4InnerTextBox>
             </StSection4TextBox>
           </div> 

          ) 
          : (
              <div style={{width:"90%", height:"100%", display:"flex"}}>
                <StSection4TextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>Range (EPA est.)</StBoldText>
                    <StInfoSmall>{range2} mi</StInfoSmall>
                  </StSection4InnerTextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>1/4 Mile</StBoldText>
                    <StInfoSmall>9.23@155 mph trap speed</StInfoSmall>
                  </StSection4InnerTextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>Peak Power</StBoldText>
                    <StInfoSmall>{peakPower2} hp</StInfoSmall>
                  </StSection4InnerTextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>Wheels</StBoldText>
                    <StInfoSmall>{wheels2}</StInfoSmall>
                  </StSection4InnerTextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>Cargo</StBoldText>
                    <StInfoSmall>{cargo2}</StInfoSmall>
                  </StSection4InnerTextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>Weight</StBoldText>
                    <StInfoSmall>{weight2} lbs</StInfoSmall>
                  </StSection4InnerTextBox>
                </StSection4TextBox>
                <StSection4TextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>Acceleration</StBoldText>
                    <StInfoSmall>{acceleration2}</StInfoSmall>
                  </StSection4InnerTextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>Top Speed</StBoldText>
                    <StInfoSmall>{topSpeed2} mph</StInfoSmall>
                  </StSection4InnerTextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>Drag Coefficient</StBoldText>
                    <StInfoSmall>{drag2} Cd</StInfoSmall>
                  </StSection4InnerTextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>Powertrain</StBoldText>
                    <StInfoSmall>{powertrain2}</StInfoSmall>
                  </StSection4InnerTextBox>
                  <StSection4InnerTextBox>
                    <StHr/>
                    <StBoldText>Supercharging Max</StBoldText>
                    <StInfoSmall>{supercharging2} kW</StInfoSmall>
                  </StSection4InnerTextBox>
                </StSection4TextBox>
              </div>
            )}
        </StSection4InfoBox> 
      </StSectionContainer>
    </>
  )
}

const StSection4ImgBox = styled.div`
  width: 45%;
  height: 50%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 50%;
  margin-right: 100px;
`;

const StSection4InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 70%;
`;

const StSection4TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const StSection4BtnBox = styled.div`
  width: 90%;
  height: 8%;
  margin: 10px 0px;
`;

const StSection4Btn1 = styled.button`
  width: 50%;
  height: 85%;
  background-color: transparent;
  color: white;
  border : ${props => props.btnClick ? "4px solid rgba(255,255,255,0.4)" : "4px solid white"};
  border-radius: 20px;
  &:hover{
    cursor: pointer;
  }
`;

const StSection4Btn2 = styled.button`
  width: 50%;
  height: 85%;
  background-color: transparent;
  color: white;
  border : ${props => props.btnClick ? "4px solid white" : "4px solid rgba(255,255,255,0.4)"};
  border-radius: 20px;
  &:hover{
    cursor: pointer;
  }
`;

const StSection4InnerTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 20%;
`;

const StHr = styled.hr`
  width: 50px;
  border: 1px solid white;
  color: white;
  opacity: 0.5;
  margin: 10px 0px;
`;

export default Section4;