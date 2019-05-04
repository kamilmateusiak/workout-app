/** @jsx jsx */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core'
import { Menu, Icon } from 'antd';
import { NAVIGATION_ITEMS } from '../../constants/navigation-items';
import { LogoutMenuItem } from './LogoutMenuItem';
import { withAuth, IWithAuthProps } from '../../containers/Auth';

interface IProps extends IWithAuthProps {};

const collapseButton = css`
  border-bottom: 1px solid rgba(255, 255, 255, 0.65);
  bottom: -8px;
`;

const menu = css`
  position: relative;
`;

export const NavigationContainer: React.FC<IProps> = props => {
  const [isCollapsed, setState] = useState(false);

  const toggleCollapsed = () => {
    setState(!isCollapsed);
  }

  if (!props.isAuthenticated) {
    return null;
  }

  return (
    <Menu
      theme="dark"
      style={{ maxWidth: 150 }}
      defaultSelectedKeys={['home']}
      mode="inline"
      inlineCollapsed={isCollapsed}
      css={menu}
    >
      <Menu.Item css={collapseButton} onClick={toggleCollapsed}>
        <Icon type={isCollapsed ? 'menu-unfold' : 'menu-fold'} />
        {isCollapsed && <span>Expand navigation</span>}
      </Menu.Item>
      {NAVIGATION_ITEMS.map(item => (
        <Menu.Item key={item.id}>
          <Icon type={item.iconName} />
          <span>{item.name}</span>
          <Link to={item.path} />
        </Menu.Item>
      ))}
      <LogoutMenuItem />
    </Menu>
  );
}

export const Navigation = withAuth(NavigationContainer);
