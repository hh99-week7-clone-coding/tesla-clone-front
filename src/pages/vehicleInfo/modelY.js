import React from 'react'
import Header from "../../components/Header.jsx";
import Section1 from "../../components/VehicleInfo/Section1"
// import images
import modelY_1 from "../../image/info/modelY/Vehicle-modelY-1.jfif";
import modelY_1_mobile from "../../image/info/modelY/Vehicle-modelY-1-mobile.jfif";

const ModelY = () => {
  return (
    <>
        <Header top="20px"/>
        <Section1 
        Img={modelY_1} 
        MobileImg={modelY_1_mobile}
        title="Model Y"
        text=""
        infoBig1="76 cu ft"
        infoSmall1="Cargo Space"
        infoBig2="330 mi"
        infoSmall2="Range (EPA est.)"
        infoBig3="AWD"
        infoSmall3="Dual Motor"
        infoBig4=""
        infoSmall4=""
        modelId=""/>
    </>
  )
}

export default ModelY;
