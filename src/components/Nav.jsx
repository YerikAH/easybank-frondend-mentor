import React, { useState } from "react";
import styled from "styled-components";
import { RemoveScroll } from "react-remove-scroll";
/*images*/

import logo from "../images/logo.svg";
import hamImg from "../images/icon-hamburger.svg";
import hamImgClose from "../images/icon-close.svg";

const Logo = styled.img``;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: var(--White);
  position: relative;
  z-index: 100;
  @media (min-width: 1100px) {
    align-items: center;
    max-width: 1100px;
    width: 100%;
  }
`;
const Ham = styled.img`
  height: 14px;
  width: 24px;
  cursor: pointer;
  @media (min-width: 1100px) {
    display: none;
  }
`;
const CloseHam = styled.img`
  display: none;
`;
const BoxLin = styled.div`
  z-index: 100;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--White);
  position: absolute;
  width: 90%;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 75px;
`;
const LinkBoxLin = styled.a`
  width: 100%;
  display: block;
  padding: 0.5rem;
  color: var(--Dark-Blue);
  text-align: center;
  @media (min-width: 1100px) {
    padding: 1rem;
    font-size: 14px;
    color: var(--Grayish-Blue);
    position: relative;
    &:after {
      content: "";
      position: absolute;
      height: 3px;
      width: 0;
      left: 0;
      bottom: -10px;
      background: rgb(48, 211, 92);
      background: linear-gradient(
        94deg,
        rgba(48, 211, 92, 1) 0%,
        rgba(42, 182, 217, 1) 100%
      );
    }
    &:hover {
      color: var(--Dark-Blue);
      transition: 0.3s;
    }
    &:hover:after {
      width: 100%;
      transition: 0.3s;
    }
  }
`;
const GradiBg = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(45, 49, 77);
  background: linear-gradient(
    180deg,
    rgba(45, 49, 77, 1) 15%,
    rgba(45, 49, 77, 1) 55%,
    rgba(221, 222, 227, 0) 84%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0.5;
  position: absolute;
  z-index: 100;
`;
const NavUlDesktop = styled.ul`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
  }
`;
const ButtonDesktop = styled.button`
  display: none;
  @media (min-width: 1100px) {
    font-size: 1rem;
    background: rgb(48, 211, 92);
    background: linear-gradient(
      94deg,
      rgba(48, 211, 92, 1) 0%,
      rgba(42, 182, 217, 1) 100%
    );
    border: none;
    padding: 1rem 2rem;
    border-radius: 255px;
    color: var(--White);
    font-weight: 700;
    display: block;
    &:hover {
      opacity: 0.5;
      transition: 0.3s;
    }
  }
`;
function Nav() {
  const [ham, setHam] = useState(false);
  const handleMenu = (e) => {
    if (!ham) {
      setHam(true);
      e.target.style.display = "none";
      e.target.nextElementSibling.style.display = "block";
    } else {
      setHam(false);
      e.target.previousElementSibling.style.display = "block";
      e.target.style.display = "none";
    }
  };
  return (
    <nav>
      <Bar>
        <Logo src={logo} />
        <NavUlDesktop>
          <li>
            <LinkBoxLin href="#">Home</LinkBoxLin>
          </li>
          <li>
            <LinkBoxLin href="#">About</LinkBoxLin>
          </li>
          <li>
            <LinkBoxLin href="#">Contact</LinkBoxLin>
          </li>
          <li>
            <LinkBoxLin href="#">Blog</LinkBoxLin>
          </li>
          <li>
            <LinkBoxLin href="#">Careers</LinkBoxLin>
          </li>
        </NavUlDesktop>
        <ButtonDesktop>Request Invite</ButtonDesktop>
        <Ham src={hamImg} onClick={handleMenu} />
        <CloseHam src={hamImgClose} onClick={handleMenu} />
      </Bar>
      {ham && (
        <RemoveScroll>
          <GradiBg></GradiBg>
          <BoxLin>
            <ul>
              <li>
                <LinkBoxLin href="#">Home</LinkBoxLin>
              </li>
              <li>
                <LinkBoxLin href="#">About</LinkBoxLin>
              </li>
              <li>
                <LinkBoxLin href="#">Contact</LinkBoxLin>
              </li>
              <li>
                <LinkBoxLin href="#">Blog</LinkBoxLin>
              </li>
              <li>
                <LinkBoxLin href="#">Careers</LinkBoxLin>
              </li>
            </ul>
          </BoxLin>
        </RemoveScroll>
      )}
    </nav>
  );
}

export default Nav;
