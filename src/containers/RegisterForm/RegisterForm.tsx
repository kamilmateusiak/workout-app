/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { container, wrapper, button } from './styles/register-form';
import { Link } from 'react-router-dom';

class RegisterFormComponent extends React.Component<FormComponentProps> {
  state = {
    confirmDirty: false
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule: any, value: string, callback: any) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule: any, value: string, callback: any) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <div css={container}>
        <div css={wrapper}>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Username">
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your username!'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!'
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input type="password" />)}
            </Form.Item>
            <Form.Item label="Confirm Password">
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!'
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item label="First name">
              {getFieldDecorator('rirstName', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your first name!'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Last name">
              {getFieldDecorator('lastName', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your last name!'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button css={button} htmlType="submit">Register</Button>
              Or <Link to="/login">login now!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export const RegisterForm = Form.create({ name: 'register' })(RegisterFormComponent);
