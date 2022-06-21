import React from 'react';
import Styled from 'styled-components';

  const ModelS = ( {url, ChangeUrl, title, cost} ) => {

    function over(e){
      e.currentTarget.src = ChangeUrl;
    }

    function out(e) {
      e.currentTarget.src = url;
    }

      return (
          <StCardWrap>
            <StImg 
              alt={title} 
              src={url}
              onMouseOver={over}
              onMouseOut={out}
            />
            <StCardList>
              <StSmallWrap>
                <StCaTitle>{title}</StCaTitle>
                <StP>{cost}</StP>
              </StSmallWrap>
            </StCardList>
          </StCardWrap>
      )
  };


const StCardWrap = Styled.div`
  margin-top: 100px;
  margin-left: 60px;
  display: column;
  width: 500px;
  position: relative;
`;


const StImg = Styled.img` 
  width: 478px;
  height: 478px;
  padding: 0px 0px 0px;  
  &:hover{    
    cursor: pointer;
  }
  
`;


const StCardList = Styled.div`
  display: flex;
  box-orient: horizontal;
  flex-flow: row wrap;
  margin-top: 15px;
  width: 300px;
  position: relative;
  display: block;
`;


const StSmallWrap = Styled.div`
  width: 500px;
`;

const StCaTitle = Styled.h3`
  font-family: "text";
  margin-bottom: 10px;
  &:hover{
    color: red;
    cursor: pointer;
  }
`;

const StP = Styled.p`
  font-family: "text";
  font-weight: 700;
`;


export default ModelS;