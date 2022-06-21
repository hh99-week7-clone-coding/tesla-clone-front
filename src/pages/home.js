import React, { useRef } from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { menuClose } from '../redux/modules/home';
// import components
import Header from '../components/Header';
import MainImage from '../components/MainImage';
import FirstImage from '../components/FirstImage';
import SideMenu from '../components/SideMenu';
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
import downArrow from "../image/down-arrow-png-clipart-716084.png";


const Home = () => {

    const dispatch = useDispatch();

  // 스크롤 맨 위로 올리는 top버튼 onClick 이벤트
  const onScrollTopHandler = () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }

  // 스크롤 내림 버튼 
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();
  const section7Ref = useRef();

  const onClickSection2 = () => {
    const section2Top = section2Ref?.current?.getBoundingClientRect().top
    window.scrollBy({top: section2Top, behavior: 'smooth'})
  }

  const onClickSection3 = () => {
    const section3Top = section3Ref?.current?.getBoundingClientRect().top
    window.scrollBy({top: section3Top, behavior: 'smooth'})
  }

  const onClickSection4 = () => {
    const section4Top = section4Ref?.current?.getBoundingClientRect().top
    window.scrollBy({top: section4Top, behavior: 'smooth'})
  }

  const onClickSection5 = () => {
    const section5Top = section5Ref?.current?.getBoundingClientRect().top
    window.scrollBy({top: section5Top, behavior: 'smooth'})
  }

  const onClickSection6 = () => {
    const section6Top = section6Ref?.current?.getBoundingClientRect().top
    window.scrollBy({top: section6Top, behavior: 'smooth'})
  }

  const onClickSection7 = () => {
    const section7Top = section7Ref?.current?.getBoundingClientRect().top
    window.scrollBy({top: section7Top, behavior: 'smooth'})
  }

  // menu 바 열기
  const IsMenuOpened = useSelector(state => state.home.menuOpened)

  const onMenuClose = () => {
    dispatch(menuClose());
  }

  return (
    <StContainer>
        <StSideMenuBackground onClick={onMenuClose} IsMenuOpened={IsMenuOpened}>
          <SideMenu/>
        </StSideMenuBackground>
        <StBanner>
          <span>Read Tesla's 2021 Impact Report</span>
        </StBanner>
        <Header top="60px"/> 
        <FirstImage Img={Home1} MobileImg={Home1Mobile} title="Model 3" text="Order Online for Touchless Delivery" btn1="CUSTOM ORDER" btn2="EXISTING INVENTORY"/>
        <StNext src={downArrow} onClick={onClickSection2} bottom="2vh"/>
        <MainImage ref={section2Ref} Img={Home2} MobileImg={Home2Mobile} title="Model Y" text="Order Online for Touchless Delivery" btn1="CUSTOM ORDER" btn2="EXISTING INVENTORY"/>
        <StNext src={downArrow} onClick={onClickSection3} bottom="-98vh"/>
        <MainImage ref={section3Ref} Img={Home3}MobileImg={Home3Mobile} title="Model S" text="Order Online for Touchless Delivery" btn1="CUSTOM ORDER" btn2="EXISTING INVENTORY"/>
        <StNext src={downArrow} onClick={onClickSection4} bottom="-198vh"/>
        <MainImage ref={section4Ref} Img={Home4} MobileImg={Home4Mobile} title="Model X" text="Order Online for Touchless Delivery" btn1="CUSTOM ORDER" btn2="EXISTING INVENTORY"/>
        <StNext src={downArrow} onClick={onClickSection5} bottom="-298vh"/>
        <MainImage ref={section5Ref} Img={Home5}MobileImg={Home5Mobile} title="Solar Panels" text="Lowest Cost Solar Panels in America" btn1="ORDER NOW" btn2="LEARN MORE"/>
        <StNext src={downArrow} onClick={onClickSection6} bottom="-398vh"/>
        <MainImage ref={section6Ref} Img={Home6}MobileImg={Home6Mobile} title="Solar Roof" text="Produce Clean Energy From Your Roof" btn1="ORDER NOW" btn2="LEARN MORE"/>
        <StNext src={downArrow} onClick={onClickSection7} bottom="-498vh"/>
        <MainImage ref={section7Ref} Img={Home7}MobileImg={Home7Mobile} title="Accessories" text="" btn1="SHOP NOW" btn2="LEARN MORE"/>
        <StScrollTopBtn onClick={onScrollTopHandler}>Top</StScrollTopBtn>
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

const StSideMenuBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => props.IsMenuOpened ? "flex" : "none"};
    align-items: center;
    justify-content: flex-end;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 101;
    &:hover{
        cursor: pointer;
    }
`;

const StScrollTopBtn = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3a3d41;
  color: #e6e6e5;
  font-family: "text";
  &:hover{
    cursor: pointer;
  }
`;

const StNext = styled.img`
    position: absolute;
    bottom : ${props => props.bottom};
    left: 49.6%;
    width: 30px;
    animation : nextBtn 2s infinite ease-in-out;
    &:hover{
      cursor: pointer;
    }
`;


export default Home;
