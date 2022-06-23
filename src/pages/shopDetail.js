import React, { useEffect } from 'react'
import Styled from 'styled-components';
import Detail from '../components/Detail/Detail';
import CategoryImgSlide from '../components/CategoryImgSlide';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __loadDetail } from '../redux/modules/shopdetail'


const ShopDetail = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

 


  return (
    <> 
      <Wrap>
        <StCategory>
          <CategoryImgSlide 
            url1="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1758879-00-A_6_2000.jpg"
            url2="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1758879-00-A_3_2000.jpg"
            />
        </StCategory>
        <Detail
          title="Giga Texas Belt Buckle"
          cost="$400"
          desc="Celebrate our newest gigafactory with Giga Texas Belt Buckle. With an intricate and detailed design, the buckle includes a prominent T logo atop the Texas Lone Star. Every Giga Texas Belt Buckle is manufactured from die cast zinc, engraved and then brushed with an antique silver finish."          
          />
      </Wrap>
      </>
    
  )
}


const Wrap = Styled.div`
  overflow: hidden;
  display: flex;
  margin: 0;
  position: relative;
`;

const StCategory = Styled.div`
  
`;


export default ShopDetail;
