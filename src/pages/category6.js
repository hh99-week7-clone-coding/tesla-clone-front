import React, { useEffect } from 'react'
import Styled from 'styled-components';
import Men from '../components/Category/Men';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __loadBestSellor } from '../redux/modules/men';

const Category6 = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bestseller = useSelector(state => state.modelslist.bestseller);


  console.log(bestseller);

  const MenID1 = "men.best-sellers";


  useEffect(()=>{
      dispatch(__loadBestSellor(MenID1));

  },[dispatch]);

    
    return (
        <> 
        <Wrap> 
            <StContainer>
                <StTitleWrap>
                    <StTitle>Men</StTitle>
                    <StCardTitle>Best Sellers</StCardTitle>
                </StTitleWrap>
                <StCardAlign>
                  {bestseller && 
                      bestseller.map((item)=>(
                      <Men
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

export default Category6;
