/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'

const container = css`
  text-align: center;
`;

export const Dashboard: React.FC = () => {
  return (
    <div css={container}>
      Dashboard
    </div>
  );
}
