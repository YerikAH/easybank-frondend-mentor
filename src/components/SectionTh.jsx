import React from "react";
import styled from "styled-components";

/*images*/
import con from "../images/image-confetti.jpg";
import curr from "../images/image-currency.jpg";
import pla from "../images/image-plane.jpg";
import rest from "../images/image-restaurant.jpg";

const GridThr = styled.div`
  display: grid;
  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 235px);
    gap: 40px;
    grid-template-rows: auto;
  }
`;
const FatherAll = styled.div`
  margin-top: 4rem;
  & h4 {
    font-size: 2rem;
    text-align: center;
    font-weight: 300;
    color: var(--Dark-Blue);
    margin-bottom: 2rem;
  }
  @media (min-width: 1100px) {
    max-width: 1100px;
    margin-top: 7rem;
    margin-bottom: 7rem;
    & h4 {
      text-align: left;
    }
  }
`;
const BoxiChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  width: 100%;
  & img {
    height: 230px;
    max-width: 350px;
    padding: 1rem;
    width: 100%;
  }
  & span {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    color: var(--Grayish-Blue);
    padding: 0 1.8rem;
    max-width: 350px;
    font-size: 12px;
  }
  & h5 {
    width: 100%;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--Dark-Blue);
    padding: 0 1.8rem;
    max-width: 350px;
    cursor: pointer;
  }
  & h5:hover {
    color: var(--Lime-Green);
    transition: 0.3s;
  }
  & p {
    font-size: 14px;
    margin-top: 1rem;
    color: var(--Grayish-Blue);
    line-height: 30px;
    max-width: 350px;
    padding: 0 1.8rem;
  }
  @media (min-width: 1100px) {
    & img {
      height: 175px;
      padding: 0;
    }
    & span {
      padding: 0;
      margin-top: 0.5rem;
    }
    & h5 {
      padding: 0;
    }
    & p {
      padding: 0;
    }
  }
`;

function SectionTh() {
  const cent = {
    justifyContent: "center",
    display: "flex",
  };
  return (
    <section style={cent}>
      <FatherAll>
        <h4>Latest Articles</h4>
        <GridThr>
          <BoxiChild>
            <img src={curr} alt="img" />
            <span>By Claire Robinson</span>
            <h5>Receive money in any currency with no fees</h5>
            <p>
              The world is getting smaller and we're becomming more mobile. So
              why should your be forced to only receive money in a single ...
            </p>
          </BoxiChild>
          <BoxiChild>
            <img src={rest} alt="img" />
            <span>By Wilson Hutton</span>
            <h5>Treat yourself without worrying about money</h5>
            <p>
              Our simple budgeting feature allows your to separate our your
              spending and ser realisticx limits each month. That means you ...
            </p>
          </BoxiChild>
          <BoxiChild>
            <img src={pla} alt="img" />
            <span>By Wilson Hutton</span>
            <h5>Take your Easybank card wherever you go</h5>
            <p>
              We want your to enjoy your travels. This is why we don't charge
              any fees on purchaese while you're abroad. We'll even show you ...
            </p>
          </BoxiChild>
          <BoxiChild>
            <img src={con} alt="img" />
            <span>By claire Robinson</span>
            <h5>Our invite-only beta accounts are now live!</h5>
            <p>
              After a lot of hasrd work by the whole team, we're yo launch our
              closed beta. It's easy to requess an invite throuthg the site ...
            </p>
          </BoxiChild>
        </GridThr>
      </FatherAll>
    </section>
  );
}

export default SectionTh;
