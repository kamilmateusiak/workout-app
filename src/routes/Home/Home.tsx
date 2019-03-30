/** @jsx jsx */
import React from 'react';
import logoImage from './logo.svg';
import { jsx, css, keyframes } from '@emotion/core'

const container = css`
  text-align: center;
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const logo = css`
  animation: ${spinAnimation} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const header = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const link = css`
  color: #61dafb;
`;

export const Home: React.FC = () => {
  return (
    <div css={container}>
      <header css={header}>
        <img src={logoImage} css={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          css={link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div>
  );
}
