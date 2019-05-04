/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect, MapDispatchToProps } from 'react-redux';

import * as actionsCreators from '../../store/features/auth/actionsCreators';
import { container, wrapper, button, inputIcon } from './styles/login-form';
import { withAuth, IWithAuthProps } from '../Auth';

interface IProps extends IWithAuthProps, FormComponentProps {}

const LoginFormComponent: React.FC<IProps> = props => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        props.onLogin({loginData: values, onSuccess: () => {}});
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <div css={container}>
      <div css={wrapper}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })(<Input prefix={<Icon type="user" css={inputIcon} />} placeholder="username" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }]
            })(<Input prefix={<Icon type="lock" css={inputIcon} />} type="password" placeholder="Password" />)}
          </Form.Item>
          <Form.Item>
            <Button css={button} htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export const LoginForm = Form.create({ name: 'login' })(
  withAuth(LoginFormComponent)
);
