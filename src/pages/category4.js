import React, { useEffect } from 'react'
import Styled from 'styled-components';
import ModelX from '../components/Category/ModelX';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __loadBestSellor, __loadInterior, __loadExterior } from '../redux/modules/modelx';

const Category4 = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bestseller = useSelector(state => state.modelslist.bestseller);
    const interior = useSelector(state => state.modelslist.interior);
    const exterior = useSelector(state => state.modelslist.exterior);



    const ModelXID1 = "model-x.best-sellers";
    const ModelXID2 = "model-x.interior";
    const ModelXID3 = "model-x.exterior";

    useEffect(()=>{
        dispatch(__loadBestSellor(ModelXID1));

    },[dispatch]);


    useEffect(()=>{
        dispatch(__loadInterior(ModelXID2));
    },[dispatch])



    useEffect(()=>{
        dispatch(__loadExterior(ModelXID3));
    },[dispatch])

    return (
        <> 
        <Wrap> 
            <StContainer>
                <StTitleWrap>
                    <StTitle>Model X</StTitle>
                    <StCardTitle>Best Sellers</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    {bestseller && 
                        bestseller.map((item)=>(
                        <ModelX
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
                    <StCardTitle>Interior</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    {interior && 
                        interior.map((item)=>(
                        <ModelX
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
                    <StCardTitle>Exterior</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                    {exterior && 
                        exterior.map((item)=>(
                        <ModelX
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

export default Category4;
