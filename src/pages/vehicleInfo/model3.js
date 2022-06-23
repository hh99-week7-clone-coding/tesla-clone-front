import React from 'react'
import Header from "../../components/Header";
import Section1 from "../../components/VehicleInfo/Section1"
import Section3 from '../../components/VehicleInfo/Section3';
import Section5 from "../../components/VehicleInfo/Section5";
// import images
import model3_1 from "../../image/info/model3-2/Vehicle-model3-1.jfif";
import model3_1_mobile from "../../image/info/model3-2/Vehicle-model3-1-mobile.jfif";
import model3_2 from "../../image/info/model3-2/Vehicle-model3-2.jfif";
import model3_2_mobile from "../../image/info/model3-2/Vehicle-model3-2-mobile.jfif";
import model3_3 from "../../image/info/model3-2/Vehicle-model3-3.jfif";
import model3_4 from "../../image/info/model3-2/Vehicle-model3-4.jfif";

 const Model3 = () => {
  return (
    <>
        <Header top="20px"/>
        <Section1 
            Img={model3_1} 
            MobileImg={model3_1_mobile}
            title="Model 3"
            text=""
            infoBig1="3.1 s"
            infoSmall1="0-60 mph"
            infoBig2="358 mi"
            infoSmall2="Range (EPA est.)"
            infoBig3="AWD"
            infoSmall3="Dual Motor"
            infoBig4=""
            infoSmall4=""
            modelId={3}/>
        <Section3
          Img={model3_2 }
          MobileImg={model3_2_mobile}
          smallTitle="Performance"
          title="Quickest Acceleration"
          text="Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds."
          modelId={3}
        />
        <Section3
          Img={model3_3}
          MobileImg={model3_2_mobile}
          smallTitle="All-Wheel Drive"
          title="Dual Motor"
          text="Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control."
          modelId={3}
        />
        <Section5
          title="Model 3"
          img={model3_4}
          modelId={3}/>
    </>
  )
}

export default Model3;
