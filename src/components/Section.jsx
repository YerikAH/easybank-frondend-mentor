import React from "react";
import styled from "styled-components";
/*image*/
import bg from "../images/bg-intro-mobile.svg";
import bgCel from "../images/image-mockups.png";
import bgDes from "../images/bg-intro-desktop.svg";

const GridSection = styled.div`
  display: grid;
  grid-template-areas: "imgen" "tex";
  @media (min-width: 1100px) {
    grid-template-areas: "tex imgen";
    grid-template-columns: 50% 50%;
    max-width: 1100px;
    max-height: 900px;
    position: relative;
    grid-template-columns: 40% 60%;
    gap: 100px;
  }
`;
const BoxDiv = styled.div`
  margin-top: 2rem;
  grid-area: tex;
  & h1 {
    font-size: 3rem;
    text-align: center;
    font-weight: 300;
    color: var(--Dark-Blue);
    margin-bottom: 2rem;
  }
  & p {
    font-size: 1rem;
    line-height: 30px;
    color: var(--Grayish-Blue);
    margin-bottom: 3rem;
    padding: 0px 1.5rem;
    text-align: center;
  }
  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -4rem;

    & h1 {
      text-align: left;
    }
    & p {
      padding: 0;
      text-align: left;
    }
  }
`;
const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  & button {
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
  }
  & button:hover {
    opacity: 0.5;
    transition: 0.3s;
  }
  @media (min-width: 1100px) {
    justify-content: start;
  }
`;
const BgImg = styled.div`
  grid-area: imgen;
  background-image: url("${bg}");
  width: 100vw;
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;
  height: 50vh;
  object-fit: cover;
  overflow: hidden;
  & img {
    position: absolute;
    top: -90px;
    width: 100%;
    object-fit: cover;
  }
  @media (min-width: 1100px) {
    background-image: url("${bgDes}");
    height: 100vh;
    width: 50vw;
    max-width: 1600px;
    max-height: 900px;
    overflow: visible;
    display: flex;
    justify-content: end;
    background-position: 0 -70px;
    & img {
      top: -50px;
      width: 100%;
      max-width: 710px;
      right: -100px;
    }
  }
`;
function Section() {
  return (
    <section className="sectionOne">
      <GridSection>
        <BgImg>
          <img src={bgCel} alt="four phone" />
        </BgImg>
        <BoxDiv>
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <BoxButton>
            <button>Request Invite</button>
          </BoxButton>
        </BoxDiv>
      </GridSection>
    </section>
  );
}

export default Section;
