import React, { useEffect } from 'react'
import Styled from 'styled-components';
import LifeStyle from '../components/Category/LifeStyle';
import ShopCategoryHeader from '../components/ShopCategoryHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __loadBestSellor, __loadMini, __loadDrinkWare, __loadOutDoor, __loadGiftCard } from '../redux/modules/lifestyle'

const Category9 = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const bestseller = useSelector(state => state.lifestylelist.bestseller);
    const miniteslas = useSelector(state => state.lifestylelist.miniteslas);
    const drinkware = useSelector(state => state.lifestylelist.drinkware);
    const outdoor = useSelector(state => state.lifestylelist.outdoor);
    const giftcard = useSelector(state => state.lifestylelist.giftcard);
  
  
  
    const LifeID1 = "lifestyle.best-sellers";
    const LifeID2 = "lifestyle.mini-teslas";
    const LifeID3 = "lifestyle.drinkware";
    const LifeID4 = "lifestyle.outdoor-tech";
    const LifeID5 = "lifestyle.gift-card";

    
  
    useEffect(()=>{
      dispatch(__loadBestSellor(LifeID1));
  
    },[dispatch]);
  
  
    useEffect(()=>{
      dispatch(__loadMini(LifeID2));
    },[dispatch])
  
  
  
    useEffect(()=>{
      dispatch(__loadDrinkWare(LifeID3));
    },[dispatch])

    useEffect(()=>{
        dispatch(__loadOutDoor(LifeID4));
      },[dispatch])

      useEffect(()=>{
        dispatch(__loadGiftCard(LifeID5));
      },[dispatch])

    return (
        <>
        <ShopCategoryHeader/>
        <Wrap> 
            <StContainer>
                <StTitleWrap>
                    <StTitle>LifeStyle</StTitle>
                    <StCardTitle>Best Sellers</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    {bestseller && 
                        bestseller.map((item)=>(
                        <LifeStyle
                        key={item.itemId}
                        url={item.imageUrl}
                        ChangeUrl={item.imageOverUrl}
                        title={item.itemName}
                        cost={item.price}
                        onClick={()=>{
                        navigate(`/shop/category/${item.categoryId}`)
                        }}
                        />
                    ))}
                </StCardAlign>
            </StContainer>
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Mini Teslas</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    {miniteslas && 
                        miniteslas.map((item)=>(
                        <LifeStyle
                        key={item.itemId}
                        url={item.imageUrl}
                        ChangeUrl={item.imageOverUrl}
                        title={item.itemName}
                        cost={item.price}
                        onClick={()=>{
                        navigate(`/shop/category/${item.categoryId}`)
                        }}
                        />
                    ))}
                </StCardAlign>
            </StContainer>
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Drinkware</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    {drinkware && 
                        drinkware.map((item)=>(
                        <LifeStyle
                        key={item.itemId}
                        url={item.imageUrl}
                        ChangeUrl={item.imageOverUrl}
                        title={item.itemName}
                        cost={item.price}
                        onClick={()=>{
                        navigate(`/shop/category/${item.categoryId}`)
                        }}
                        />
                    ))}
                </StCardAlign>
            </StContainer>
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Outdoor & Tech</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    {outdoor && 
                        outdoor.map((item)=>(
                        <LifeStyle
                        key={item.itemId}
                        url={item.imageUrl}
                        ChangeUrl={item.imageOverUrl}
                        title={item.itemName}
                        cost={item.price}
                        onClick={()=>{
                        navigate(`/shop/category/${item.categoryId}`)
                        }}
                        />
                    ))}
                </StCardAlign>
            </StContainer>            
            <StContainer>
                <StTitleWrap>
                    <StCardTitle>Gift Card</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    {giftcard && 
                        giftcard.map((item)=>(
                        <LifeStyle
                        key={item.itemId}
                        url={item.imageUrl}
                        ChangeUrl={item.imageOverUrl}
                        title={item.itemName}
                        cost={item.price}
                        onClick={()=>{
                        navigate(`/shop/category/${item.categoryId}`)
                        }}
                        />
                    ))}
                </StCardAlign>
            </StContainer>
        </Wrap>
    </>
    )
}

const Wrap = Styled.div `
  width: 100%;
  height: 100vh;
  display: column;
`;

const StContainer = Styled.div `
  margin: 60px auto;
  display: block;
  background-color: white;
`;

const StTitleWrap = Styled.div `
  padding: 2px 0px 0px;
  margin-left: 60px;
`;

const StCardAlign = Styled.ul `
justify-content: start;
display: flex;
flex-wrap: wrap;
`;

const StTitle = Styled.h1 `
  display: block;
  font-size: 30px;
  font-family: "text";
  line-height: 40px;
  font-weight: 700;
  padding: 0;
`;

const StCardTitle = Styled.h2 `
  font-family: "text";
  font-weight: 700;
  font-size: 25px;
  line-height: 40px;  
  margin-top: 30px; 
  position: absolute;
`;

export default Category9;
