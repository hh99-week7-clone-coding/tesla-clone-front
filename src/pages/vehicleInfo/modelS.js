import React from 'react'
import styled from 'styled-components';
import Header from "../../components/Header";
import "../style/vehicleInfo.css";
// import components
import Section1 from '../../components/VehicleInfo/Section1';
import Section2 from '../../components/VehicleInfo/Section2';
import Section3 from '../../components/VehicleInfo/Section3';
import Section4 from '../../components/VehicleInfo/Section4';
import Section5 from '../../components/VehicleInfo/Section5';
// import image
import modelS_1 from "../../image/info/model3/Vehicle-modelS-1.jfif";
import modelS_1_mobile from "../../image/info/model3/Vehicle-modelS-1-mobile.jfif";
import modelS_2 from "../../image/info/model3/Vehicle-modelS-2.jfif";
import modelS_3 from "../../image/info/model3/Vehicle-modelS-3.png";
import modelS_4 from "../../image/info/model3/Vehicle-modelS-4.jfif";
import modelS_5 from "../../image/info/model3/Vehicle-modelS-5.jfif";
import modelS_6 from "../../image/info/model3/vehicle-modelS-6.jfif";
import modelS_7 from "../../image/detail/model3/detail-model3-2.jfif";

const ModelS = () => {

  return (
    <StContainer>
      <Header top="20px"/>
      <Section1 
        Img={modelS_1} 
        MobileImg={modelS_1_mobile}
        title="Model S"
        text="Plaid"
        infoBig1="396 mi"
        infoSmall1="Range"
        infoBig2="1.99 s"
        infoSmall2="0-60 mph"
        infoBig3="200 mph"
        infoSmall3="Top Speed"
        infoBig4="1,020 hp"
        infoSmall4="Peak Power"
        modelId={1}/>
      <Section2
        Img1={modelS_2}
        Img2={modelS_3}
        Img3={modelS_4}
        title1="Stay Connected"
        title2="Immersive Sound"
        title3="Room for Everything"
        text1="Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."
        text2="A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality."
        text3="With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too."
        />
        <Section3
          Img={modelS_5}
          MobileImg={modelS_1_mobile}
          smallTitle="Exterior"
          title="Designed for Efficiency"
          text="With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence."
          InfoBackground="black"
          modelId={1}
        />
        <Section4 
          img={modelS_6}
          title="model S Specs"
          range1="405"
          range2="396"
          peakPower1="670"
          peakPower2="1,020"
          wheels1="19 or 21"
          wheels2="19 or 21"
          cargo1="28 cu ft"
          cargo2="28 cu ft"
          acceleration1="3.1 s 0-60"
          acceleration2="1.99 s 0-60 mph"
          topSpeed1="155"
          topSpeed2="200"
          drag1="0.208"
          drag2="0.208"
          weight1="4,561"
          weight2="4,766"
          powertrain1="Dual Motor"
          powertrain2="Tri Motor"
          supercharging1="250"
          supercharging2="250"
          btn1="Model S Pluid"
          btn2="Model S"
        />
        <Section5
          title="Model S"
          img={modelS_7}
          modelId={1}/>
    </StContainer>

  )
}

const StContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;


export default ModelS;