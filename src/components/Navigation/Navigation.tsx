/** @jsx jsx */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core'
import { Menu, Icon } from 'antd';
import { NAVIGATION_ITEMS } from '../../constants/navigation-items';

interface IProps {};

const collapseButton = css`
  border-bottom: 1px solid rgba(255, 255, 255, 0.65);
  bottom: -8px;
`;

export const Navigation: React.FC = (props: IProps) => {
  const [isCollapsed, setState] = useState(false);

  const toggleCollapsed = () => {
    setState(!isCollapsed);
  }

  return (
    <Menu
      theme="dark"
      style={{ maxWidth: 150 }}
      defaultSelectedKeys={['home']}
      mode="inline"
      inlineCollapsed={isCollapsed}
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
    </Menu>
  );
}
