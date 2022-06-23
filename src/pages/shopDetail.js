import React from 'react'
import Styled from 'styled-components';
import Detail from '../components/Detail/Detail';
import CategoryImgSlide from '../components/CategoryImgSlide';

const ShopDetail = () => {


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
          url1="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1758879-00-A_6_2000.jpg"
          url2="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/LIFESTYLE/ACCESSORIES_COLLECTIBLES/MISCELLANEOUS/1758879-00-A_3_2000.jpg"
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
`;

const StCategory = Styled.div`
  
`;


export default ShopDetail;
