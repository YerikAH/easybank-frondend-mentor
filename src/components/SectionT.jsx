import React from "react";
import styled from "styled-components";

/*images*/
import api from "../images/icon-api.svg";
import bug from "../images/icon-budgeting.svg";
import boar from "../images/icon-onboarding.svg";
import onli from "../images/icon-online.svg";

const GridSection = styled.div`
  display: grid;
  margin-top: 8rem;
  background: var(--Light-Grayish-Blue);
  padding: 4rem 0;
  @media (min-width: 1100px) {
    padding: 8rem 0;
    margin-top: 0;
    max-width: 1100px;
  }
`;
const ChildGrid = styled.div`
  text-align: center;
  & h2 {
    font-size: 2rem;
    font-weight: 500;
    color: var(--Dark-Blue);
  }
  & p {
    line-height: 30px;
    margin-top: 2rem;
    color: var(--Grayish-Blue);
    padding: 0 0.5rem;
  }
  @media (min-width: 1100px) {
    text-align: left;
    & p {
      font-size: 14px;
    }
  }
`;
const ChildGridSecond = styled.div`
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(4, 275px);
    grid-template-rows: auto;
    margin-top: 4rem;
  }
`;
const BoxiChild = styled.div`
  text-align: center;
  padding: 1.5rem;
  & .circle {
    margin: 2rem;
  }
  & .contentCards > h3 {
    font-size: 24px;
    font-weight: 300;
    color: var(--Dark-Blue);
    margin-bottom: 1.5rem;
  }
  & .contentCards {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  & .contentCards > p {
    line-height: 30px;
    color: var(--Grayish-Blue);
    max-width: 300px;
  }
  @media (min-width: 1100px) {
    text-align: left;
    & .contentCards {
      align-items: baseline;
    }
    & .contentCards p {
      font-size: 14px;
    }
    & .contentCards > h3 {
      font-size: 20px;
    }
  }
`;
function SectionT() {
  return (
    <section className="sectionTwo">
      <GridSection>
        <ChildGrid>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </ChildGrid>
        <ChildGridSecond>
          <BoxiChild>
            <div className="circle">
              <img src={onli} alt="card" />
            </div>
            <div className="contentCards">
              <h3>Online Banking</h3>
              <p>
                Our moden web and mobile applications allow you to keep track of
                your finances wherever you are in the world.
              </p>
            </div>
          </BoxiChild>

          <BoxiChild>
            <div className="circle">
              <img src={bug} alt="card" />
            </div>
            <div className="contentCards">
              <h3>Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Recice
                notifications when you're close to your hitting limits.
              </p>
            </div>
          </BoxiChild>
          <BoxiChild>
            <div className="circle">
              <img src={boar} alt="card" />
            </div>
            <div className="contentCards">
              <h3>Fast Onboarding</h3>
              <p>
                We don´t do branches. Open your account in minutes online and
                start taltikng control of your finnaces right away.
              </p>
            </div>
          </BoxiChild>
          <BoxiChild>
            <div className="circle">
              <img src={api} alt="card" />
            </div>
            <div className="contentCards">
              <h3>Open API</h3>
              <p>
                Manage your savings, investements, pensin, and more from one
                account. Tracking your money has never been easier.
              </p>
            </div>
          </BoxiChild>
        </ChildGridSecond>
      </GridSection>
    </section>
  );
}

export default SectionT;
