import React, { useEffect } from 'react'
import Styled from 'styled-components';
import Women from '../components/Category/Women';
import ShopCategoryHeader from '../components/ShopCategoryHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __loadBestSellor } from '../redux/modules/women';

const Category7 = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bestseller = useSelector(state => state.modelslist.bestseller);



  const WomenID1 = "women.best-sellers";


  useEffect(()=>{
      dispatch(__loadBestSellor(WomenID1));

  },[dispatch]);

    return (
        <>
        <ShopCategoryHeader/>
        <Wrap> 
            <StContainer>
                <StTitleWrap>
                    <StTitle>Women</StTitle>
                    <StCardTitle>Best Sellers</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                  {bestseller && 
                      bestseller.map((item)=>(
                      <Women
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

export default Category7;
