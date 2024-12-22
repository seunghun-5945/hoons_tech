import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 43vh;
  position: relative;
  background-color: black;
  z-index: 0

  @media screen and (min-width: 768px) {
  }
`;

const TopFrame = styled.div`
  width: 100%;
  height: 40%;
  color: black;
`;

const BottomFrame = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 3% 5% 3% 5%;
  position: absolute;

  @media screen and (min-width: 768px) {
  }
`;

const TitleFrame = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
  z-index: 0;
`;

const TitleImage = () => {
  return (
    <Container>
      <BackgroundImage src="https://cdn.pixabay.com/photo/2016/09/16/19/12/atom-1674878_640.png" />
      <TopFrame>dasdas</TopFrame>
      <BottomFrame>
        <TitleFrame>
          <h1>Front is End</h1>
          <h5 style={{color:"lightgray"}}>프론트 엔드의 시대는 끝났다 더 많은 기술 과 프레임워크에 대해 공부하자</h5>
        </TitleFrame>
      </BottomFrame>
    </Container>
  )
}

export default TitleImage;