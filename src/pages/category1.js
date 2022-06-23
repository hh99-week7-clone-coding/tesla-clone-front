import React, { useEffect } from 'react'
import Styled from 'styled-components';
import Charging from '../components/Category/Charging';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __loadCategory, __loadOnTheRoad, __loadParts } from '../redux/modules/charging';



const Category1 = () => {

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector(state => state.categories.categorydata);
    const ontheroad = useSelector(state => state.categories.ontheroad);
    const parts = useSelector(state => state.categories.parts);

 
    const ChargingID = "charging.at-home";
    const ChargingID2 = "charging.on-the-road";
    const ChargingID3 = "charging.parts";

    useEffect(()=>{
      dispatch(__loadCategory(ChargingID));

    },[dispatch]);


    useEffect(()=>{
      dispatch(__loadOnTheRoad(ChargingID2));
    },[dispatch])



    useEffect(()=>{
      dispatch(__loadParts(ChargingID3));
    },[dispatch])


  return (
    <>
    <Wrap>
      <StContainer>
        <StTitleWrap>
          <StTitle>Charging</StTitle>
          <StCardTitle>At Home</StCardTitle>
        </StTitleWrap>
        <StCardAlign>
        {categories &&
          categories.map((item) =>(
            <Charging
            key={item.itemId}
            url={item.imageUrl}
            ChangeUrl={item.imageOverUrl}
            title={item.itemName}
            cost={item.price}
            onClick={()=>{
              navigate(`/shop/category/${item.categoryId}`)
            }}/>
          ))}
          
        </StCardAlign>
      </StContainer>
      <StContainer>
        <StTitleWrap>          
          <StCardTitle>On the Road</StCardTitle>
        </StTitleWrap>
        <StCardAlign>
        {ontheroad && 
            ontheroad.map((item)=>(
            <Charging
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
          <StCardTitle>Parts</StCardTitle>
        </StTitleWrap>
        <StCardAlign>
        {parts &&
          parts.map((item)=>(
            <Charging
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

const Wrap = Styled.div`
  max-width: 1200px;
  height: 100vh;
  display: column;
`;

const StContainer = Styled.div`
  margin: 60px auto;
  display: block;
  background-color: white;
`;

const StTitleWrap = Styled.div`
  padding: 2px 0px 0px;
  margin-left: 60px;
`;

const StTitle = Styled.h1`
  display: block;
  font-size: 30px;
  font-family: "text";
  line-height: 40px;
  font-weight: 700;
  padding: 0;
`;

const StCardAlign = Styled.ul`
  justify-content: start;
  display: flex;
  flex-wrap: wrap;
`;

const StCardTitle = Styled.h2`
  font-family: "text";
  font-weight: 700;
  font-size: 25px;
  line-height: 40px;  
  margin-top: 30px; 
  position: absolute;
`;



export default Category1;
