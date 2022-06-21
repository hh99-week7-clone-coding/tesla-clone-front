import React from 'react'
import Header from '../../components/Header';
import Section1 from '../../components/VehicleInfo/Section1';
import Section2 from "../../components/VehicleInfo/Section2";
import Section3 from '../../components/VehicleInfo/Section3';
import Section4 from '../../components/VehicleInfo/Section4';
import Section5 from '../../components/VehicleInfo/Section5';
// import img
import modelX_1 from "../../image/info/modelX/Vehicle-modelX-1.jfif";
import modelX_1_mobile from "../../image/info/modelX/Vehicle-modelX-1-mobile.jfif";
import modelX_2 from "../../image/info/modelX/Vehicle-modelX-2.jfif";
import modelX_3 from "../../image/info/modelX/Vehicle-modelX-3.jfif";
import modelX_4 from "../../image/info/modelX/Vehicle-modelX-4.jfif";
import modelX_5 from "../../image/info/modelX/Vehicle-modelX-5.jfif";
import modelX_5_mobile from "../../image/info/modelX/Vehicle-modelX-5-mobile.jfif";
import modelX_6 from "../../image/info/modelX/Vehicle-modelX-6.jfif";
import modelX_7 from "../../image/info/modelX/Vehicle-modelX-7.jfif";

const ModelX = () => {
  return (
    <>
        <Header top="20px"/>
        <Section1 
        Img={modelX_1} 
        MobileImg={modelX_1_mobile}
        title="Model X"
        text="Plaid"
        infoBig1="333 mi"
        infoSmall1="Range"
        infoBig2="2.5 s"
        infoSmall2="0-60 mph"
        infoBig3="9.9 s"
        infoSmall3="1/4 Mile"
        infoBig4="1,020 hp"
        infoSmall4="Peak Power"
        modelId=""/>
        <Section2
        Img1={modelX_2}
        Img2={modelX_3}
        Img3={modelX_4}
        title1="Wireless Gaming"
        title2="Stay Connected"
        title3="Your Best Audio System"
        text1="Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
        text2="Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
        text3="A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."
        />
        <Section3
          Img={modelX_5}
          MobileImg={modelX_5_mobile}
          smallTitle="Plaid"
          title="Beyond Ludicrous"
          text="With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. All Model X powertrains, with updated battery architecture, can deliver instant torque at any speed."
        />
        <Section4 
          img={modelX_6}
          title="Model X Specs"
          range1="348"
          range2="333"
          peakPower1="670"
          peakPower2="1,020"
          wheels1="20 or 22"
          wheels2="20 or 22"
          cargo1="28 cu ft"
          cargo2="28 cu ft"
          acceleration1="2.5 s 0-60 mph"
          acceleration2="3.8 s 0-60 mph"
          topSpeed1="155"
          topSpeed2="163"
          drag1="0.24"
          drag2="0.24"
          weight1="5,185"
          weight2="5,390"
          powertrain1="Dual Motor"
          powertrain2="Tri Motor"
          supercharging1="250"
          supercharging2="250"
          btn1="Model X Pluid"
          btn2="Model X"
        />
        <Section5
          title="Model X"
          img={modelX_7}
          modelId=""/>
    </>
  )
}

export default ModelX;
