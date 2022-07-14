import React from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Form, Input, ConfigProvider, Row, Col } from 'antd';

const LoginForm: React.FC = () => {
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
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item
            label='نام کاربری'
            name='username'
            rules={[
              {
                required: true,
                message: '!لطفاً نام کاربری خود را وارد نمایید',
              },
            ]}
          >
            <ConfigProvider direction='rtl'>
              <Input placeholder='نام کاربری' />
            </ConfigProvider>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label='رمز عبور'
            name='password'
            rules={[
              {
                required: true,
                message: '!لطفاً رمز عبور خود را وارد نمایید',
              },
            ]}
          >
            <ConfigProvider direction='rtl'>
              <Input.Password placeholder='رمز عبور' />
            </ConfigProvider>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              Log in
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default LoginForm;
