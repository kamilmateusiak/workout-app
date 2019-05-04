/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import { Menu, Icon } from 'antd';
import { withAuth, IWithAuthProps } from '../../containers/Auth';

const logoutButton = css`
  position: absolute !important;
  bottom: 0 !important;
  left: 0 !important;
  width: 100%;
`;

export const LogoutMenuItemComponent: React.FC<IWithAuthProps> = ({isAuthenticated, onLogin, onLogout, ...restProps}) => {
  const handleLogout = () => {
    onLogout();
  }

  return (
    <Menu.Item {...restProps} css={logoutButton} onClick={handleLogout}>
      <Icon type="logout" />
      <span>Logout</span>
    </Menu.Item>
  );
}

export const LogoutMenuItem = withAuth(LogoutMenuItemComponent);
