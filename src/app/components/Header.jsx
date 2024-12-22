'use client';

import styled from "styled-components";
import { LiaPoopSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { GoSun } from "react-icons/go";
import { useEffect, useState } from "react";

const Container = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.scrolled ? "black" : "transparent"
  }
}))`
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  flex-direction: row;
  border: none;
  color: white;
  z-index: 10;

  @media screen and (min-width: 768px) {
    position: none;
    border-bottom: 1px solid lightgray;
  }
`;

const Frame = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 3% 0 3%;

  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;

const MenuFrame = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  @media screen and (min-width: 768px) {
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 60) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container scrolled={scrolled}>
      <Frame>
        <LiaPoopSolid style={{marginRight:"1%"}} size={30}/>
        <h3>Hoon's Tech Blog</h3>
      </Frame>
      <MenuFrame>
        <span>Home</span>
        <span>Posting</span>
        <span>News</span>
        <span>Service</span>
        <span>Service</span>
      </MenuFrame>
      <Frame style={{justifyContent:"space-around"}}>
        <GoSun size={30}/>
        <IoIosSearch size={30} style={{cursor:"pointer"}}/>
        <MenuIcon>
          <HiOutlineMenuAlt4 size={30} />
        </MenuIcon>
      </Frame>
    </Container>
  );
};

export default Header;