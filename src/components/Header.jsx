import styled from "styled-components";
import "../App.css";

const Header = () => {
  return (
    <StHeaderBox>
        <StLogo>TESLA</StLogo>
        <StMenu>
            <StMenuBox width="35vw" minWidth="550px">
                <StMenuBtn>Model S</StMenuBtn>
                <StMenuBtn>Model 3</StMenuBtn>
                <StMenuBtn>Model X</StMenuBtn>
                <StMenuBtn>Model Y</StMenuBtn>
                <StMenuBtn>Solar Roof</StMenuBtn>
                <StMenuBtn>Solar Panels</StMenuBtn>
            </StMenuBox>
        </StMenu>
        <StMenuBox width="15vw" minWidth="250px">
            <StMenuBtn>Shop</StMenuBtn>
            <StMenuBtn>Account</StMenuBtn>
            <StMenuBtn>Menu</StMenuBtn>
        </StMenuBox>
        <StSideMenu>Menu</StSideMenu>
    </StHeaderBox>
  )
}

const StHeaderBox = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    min-width: 600px;
    height: 60px;
`;

const StLogo = styled.h1`
    margin: 0px 50px;
    font-family: 'Logo';
    font-size: 18px;
    letter-spacing: 10px;
`;

const StMenu = styled.div`
    display: flex;
    justify-content: center;
    width: 75vw;
    height: 60px;
`;

const StMenuBox = styled.div`
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    height: 60px;
    @media only screen and (max-width: 1200px) {
        display: none;
    }
`;

const StMenuBtn = styled.div`
    font-family: "text";
    font-size: 15px;
    font-weight: bold;
`;

const StSideMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 30px;
    margin: 0px 30px;
    background-color: rgba(0,0,0,0.1);
    border-radius: 10px;
    font-family: "text";
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: rgba(0,0,0,0.2);
    }
    @media only screen and (min-width: 1200px) {
        display: none;
    }
`;
export default Header;