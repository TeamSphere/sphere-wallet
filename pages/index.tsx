import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import CreateAccount from "../components/CreateAccount";
import RestoreAccount from "../components/RestoreAccount";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>The Sphere | A decentralised web token</title>
        <meta name="description" content="The Sphere BETA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTitle>
        Welcome to the {" "}
        <a href="https://www.thesphere.online">Sphere</a>
      </HomeTitle>

      <HomeGrid>
        <CreateAccount />
      </HomeGrid>
      <RestoreAccount />
    </>
  );
};

const HomeTitle = styled.h1`
  padding: 0 3rem;
  margin: 3rem 1rem;
  line-height: 1.25;
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;

  & > a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

const HomeGrid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: no-wrap;
  max-width: 1200px;
  width: 100%;
`;

export default Home;
