import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='basic'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Input placeholder='نام کاربری' />
      <Form.Item
        labelAlign='right'
        label='نام کاربری'
        name='username'
        rules={[
          {
            required: true,
            message: '!لطفاً نام کاربری خود را وارد نمایید',
          },
        ]}
      ></Form.Item>

      <Input.Password placeholder='رمز عبور' />
      <Form.Item
        labelAlign='right'
        label='رمز عبور'
        name='password'
        rules={[
          {
            required: true,
            message: '!لطفاً رمز عبور خود را وارد نمایید',
          },
        ]}
      ></Form.Item>

      <Form.Item
        name='remember'
        valuePropName='checked'
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
