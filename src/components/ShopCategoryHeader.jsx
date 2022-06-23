import React from 'react'
import styled from 'styled-components';
import "../App.css";
import { useNavigate } from 'react-router-dom';
// import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ShopCategoryHeader = () => {

    const navigate = useNavigate();

    return (
        <StHeaderBox>
            <StMenuBox width="250px">
                <StLogo onClick={()=>{
                    navigate('/');
                }}>TESLA</StLogo>
                <StSpan>|</StSpan>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop');
                    }}>Shop</StSpan>
                </StMenuBtn>
            </StMenuBox>
            <StMenuBox width="550px">
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/charging');
                    }}>Charging</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/model-s');
                    }}>Models</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/model-x');
                    }}>Modelx</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/model-y');
                    }}>Modely</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/model-3');
                    }}>Model3</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/men');
                    }}>Men</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/women');
                    }}>Women</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/kids');
                    }}>Kids</StSpan>
                </StMenuBtn>
                <StMenuBtn>
                    <StSpan onClick={()=>{
                        navigate('/shop/category/lifestyle');
                    }}>Lifestyle</StSpan>
                </StMenuBtn>
            </StMenuBox>
            <StMenuBox width="150px">
                    <FontAwesomeIcon icon={faCartShopping} style={{color:"#black"}}/>
                    <StMenuBtn>
                        <StSpan style={{marginLeft:"10px"}}>Menu</StSpan>
                    </StMenuBtn>
            </StMenuBox>
        </StHeaderBox>
    )
}

const StHeaderBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    background-color: white;
    z-index: 10;
`;

const StMenuBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: ${props => props.width};
    height: 50px;
    background-color: white;
    margin-left: 50px;
`;

const StLogo = styled.h1`
    font-family: "Logo";
    font-size: 16px;
    color: black;
    letter-spacing: 10px;
    &:hover{    
    cursor: pointer;
  }
`;

const StSpan = styled.span`
    margin-left: 50px;
    font-family: "text";
    font-size: 18px;
    font-weight: bold;
    color: black
`;



const StMenuBtn = styled.div`
    &:hover{    
    cursor: pointer;
  }
`;

export default ShopCategoryHeader;
