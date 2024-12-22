import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 45vh;
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
`;

const DateFrame = styled.div`
  width: 100%;
  height: 20%;
  color: black;
  color: white;
  
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
  z-index: 0;
`;

const PostImage = () => {
  return (
    <Container>
      <BackgroundImage src="https://cdn.pixabay.com/photo/2016/09/16/19/12/atom-1674878_640.png" />
      <TopFrame>dasdas</TopFrame>
      <BottomFrame>
        <TitleFrame>
          <h5>오늘의 포스팅</h5>
          <h2>Document AI로 문서 검토 한방에 끝내기</h2>
        </TitleFrame>
        <DateFrame><h7>2024/12/22</h7></DateFrame>
      </BottomFrame>
    </Container>
  )
}

export default PostImage;