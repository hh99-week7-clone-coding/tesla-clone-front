import React from 'react'
import styled from 'styled-components';
// import components
import Header from '../components/Header';
import MainImage from '../components/MainImage';
// import images
import Home1 from '../image/Home1.jfif';
import Home1Mobile from '../image/Home1-mobile.jfif';
import Home2 from '../image/Home2.jpg'
import Home2Mobile from '../image/Home2-mobile.jfif';
import Home3 from '../image/Home3.jfif';
import Home3Mobile from '../image/Home3-mobile.jfif';
import Home4 from '../image/Home4.jfif';
import Home4Mobile from '../image/Home4-mobile.jfif'
import Home5 from '../image/Home5.jfif';
import Home5Mobile from '../image/Home5-mobile.jfif';
import Home6 from '../image/Home6.jfif';
import Home6Mobile from '../image/Home6-mobile.jfif';
import Home7 from '../image/Home7.jpg';
import Home7Mobile from '../image/Home7-mobile.jfif';

const Home = () => {
  return (
    <StContainer>
        <StBanner>
          <span>Read Tesla's 2021 Impact Report</span>
        </StBanner>
        <Header/> 
        <MainImage Img={Home1} MobileImg={Home1Mobile} title="Model 3" text="Order Online for Touchless Delivery" btn1="CUSTOM ORDER" btn2="EXISTING INVENTORY"/>
        <MainImage Img={Home2}MobileImg={Home2Mobile} title="Model Y" text="Order Online for Touchless Delivery" btn1="CUSTOM ORDER" btn2="EXISTING INVENTORY"/>
        <MainImage Img={Home3}MobileImg={Home3Mobile} title="Model S" text="Order Online for Touchless Delivery" btn1="CUSTOM ORDER" btn2="EXISTING INVENTORY"/>
        <MainImage Img={Home4}MobileImg={Home4Mobile} title="Model X" text="Order Online for Touchless Delivery" btn1="CUSTOM ORDER" btn2="EXISTING INVENTORY"/>
        <MainImage Img={Home5}MobileImg={Home5Mobile} title="Solar Panels" text="Lowest Cost Solar Panels in America" btn1="ORDER NOW" btn2="LEARN MORE"/>
        <MainImage Img={Home6}MobileImg={Home6Mobile} title="Solar Roof" text="Produce Clean Energy From Your Roof" btn1="ORDER NOW" btn2="LEARN MORE"/>
        <MainImage Img={Home7}MobileImg={Home7Mobile} title="Accessories" text="" btn1="SHOP NOW" btn2="GO TO TOP"/>
    </StContainer> 
  )
}

const StContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StBanner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50px;
  background-color: white;
  font-family: "text";
  font-size: 15px;
  text-decoration: underline;
  z-index: 100;
`;

export default Home;
