import React from 'react'
import Header from "../../components/Header.jsx";
import Section1 from "../../components/VehicleInfo/Section1";
import Section3 from "../../components/VehicleInfo/Section3";
import Section5 from '../../components/VehicleInfo/Section5.jsx';
// import images
import modelY_1 from "../../image/info/modelY/Vehicle-modelY-1.jfif";
import modelY_1_mobile from "../../image/info/modelY/Vehicle-modelY-1-mobile.jfif";
import modelY_2 from "../../image/info/modelY/Vehicle-modelY-2.jfif";
import modelY_2_mobile from "../../image/info/modelY/Vehicle-modelY-2-mobile.jfif";
import modelY_3 from "../../image/info/modelY/Vehicle-modelY-3.jfif";
import modelY_3_mobile from "../../image/info/modelY/Vehicle-modelY-3-mobile.jfif";
import modelY_4 from "../../image/info/modelY/Vehicle-modelY-4.jfif";

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
          modelId={8}/>
        <Section3
          Img={modelY_2}
          MobileImg={modelY_2_mobile}
          smallTitle="All-Wheel Drive"
          title="Dual Motor"
          text="Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road."
          modelId={8}
        />
        <Section3
          Img={modelY_3}
          MobileImg={modelY_3_mobile}
          smallTitle="Interior"
          title="Built Around the Driver"
          text="With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky."
          modelId={8}
        />
        <Section5
          title="Model Y"
          img={modelY_4}
          modelId={8}/>
    </>
  )
}

export default ModelY;
