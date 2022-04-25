import styled from "styled-components";
import { Button, Input } from "antd";

export const Card = styled.div`
  margin: 1rem 1rem;
  padding: 1rem;
  max-width: 15rem;
  text-align: left;
  color: inherit;
  background-color: #fafafa;
  text-decoration: none;
  border: 0px solid #efefef;
  border-radius: 4px;
  transition: color 0.15s ease, border-color 0.15s ease,
    background-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    border-color: #black;
    background-color: #FF9900;
    color: black;
  }

  & > h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  & > p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  div.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem auto 0.5rem;
    color: black;
  }

  .disabledButton {
    width: 150px;
  }
`;

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 100vw;
  margin-top: 2rem;
`;

export const Airdrop = styled(Button)`
  position: absolute !important;
  top: 63%;
  left: 89%;
`;

export const Question = styled.p`
  position: absolute !important;
  top: 66%;
  left: 108%;
  border: 0.5px solid #FF9900;
  color: #FF9900;
  border-radius: 50%;
  text-align: center;
  width: 1.1rem;
  height: 1.1rem;
  font-size: 0.6rem;
`;

export const Box = styled.div`
  text-align: center;
  max-width: 800px;
  width: 80%;
  padding-top: 0.7rem;
  color: #white;
  font-weight: 600;
  border: 1px solid #FF9900;
  background-color: #FF9900;
  border-radius: 4px;
  transition: color 0.15s ease, border-color 0.15s ease,
    background-color 0.15s ease;
  margin-bottom: 3rem;
`;

export const CheckContainer = styled.div`
  width: 77%;
  margin: auto;
  position: relative;
  max-width: 750px;
`;

export const CheckImage = styled.img`
  width: 100%;
`;

export const CheckFrom = styled.p`
`;

export const Processed = styled.a`
  font-style: italic;
  color: #dc1fff;
`;

export const CheckDate = styled.p`
`;

export const RecipientInput = styled(Input)`
  height: 9%;
  width: 50%;
`;

export const AmountInput = styled(Input)`
  height: 9%;
  width: 15%;
`;

export const SignatureInput = styled(Button)`
  height: 9%;
  width: 32.5%;
`;

export const AmountText = styled.p`
`;

export const RatioText = styled.p`
`;
