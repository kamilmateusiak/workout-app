/** @jsx jsx */
import React from 'react';
import logoImage from './logo.svg';
import { jsx, css, keyframes } from '@emotion/core'
import { RegisterForm } from '../../containers/RegisterForm';

const pageWrapper = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Register: React.FC = () => {
  return (
    <div css={pageWrapper}>
      <RegisterForm />
    </div>
  );
}
