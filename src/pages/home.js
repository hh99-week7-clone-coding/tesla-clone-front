import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';

const Home = () => {
  return (
    <StContainer>
       <Header/> 
    </StContainer> 
  )
}

const StContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Home;