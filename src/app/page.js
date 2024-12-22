"use client";

import styled from "styled-components";
import Header from "./components/Header";
import TitleImage from "./components/TitleImage";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <TitleImage />
    </Container>
  );
};

export default Home;