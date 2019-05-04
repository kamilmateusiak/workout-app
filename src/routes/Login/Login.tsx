/** @jsx jsx */
import React from 'react';
import logoImage from './logo.svg';
import { jsx, css, keyframes } from '@emotion/core'
import { LoginForm } from '../../containers/LoginForm';

const pageWrapper = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Login: React.FC = () => {
  return (
    <div css={pageWrapper}>
      <LoginForm />
    </div>
  );
}
