import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import greentick from "../asset/jpg/tick.png";

const PaymentConfirmed = () => {
  return (
    <Section>
      <Container>
        <div className="tick">
          <img src={greentick} alt="green-tick" />
        </div>
        <div className="completed">
          <h1>Payment Completed</h1>
          <p>
            Please check your email concerning the details of this transaction
          </p>
          <div>
            <Link to="/">Return Home</Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #fff;
  height: 30rem;
  width: 50rem;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  padding: 6.3rem;
  .tick {
    margin: 0 auto;
    padding: 1.6rem 1.3rem;
    height: 5.3rem;
    width: 5.3rem;
    border-radius: 50%;
    box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  }
  .completed {
    h1 {
      font-size: 2.5rem;
      color: #4e598c;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.3rem;
      color: #4f4f4f;
      margin-bottom: 2rem;
    }
    div {
      a {
        font-size: 1.3rem;
        color: #f2994a;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    height: 50vh;
    padding: 2rem;
    .completed {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
      div {
        a {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default PaymentConfirmed;
