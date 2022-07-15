import React from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Form, Input, ConfigProvider, Row, Col } from 'antd';
import { InputType } from '../../../models';

const LoginForm: React.FC = styled(({ className }) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <ConfigProvider direction='rtl'>
      <Form
        className={className}
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
            <Input
              placeholder='نام کاربری'
              className='form__input'
              type={InputType.TEXT}
            />
            <Form.Item
              className='form__label'
              label='نام کاربری'
              name='username'
              rules={[
                {
                  required: true,
                  message: '!لطفاً نام کاربری خود را وارد نمایید',
                },
              ]}
            ></Form.Item>
          </Col>

          <Col span={24}>
            <Input
              placeholder='رمز عبور'
              className='form__input'
              type={InputType.PASSWORD}
            />
            <Form.Item
              className='form__label'
              label='  رمز عبور'
              name='password'
              rules={[
                {
                  required: true,
                  message: '!لطفاً رمز عبور خود را وارد نمایید',
                },
              ]}
            ></Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' className='w-100'>
                Log in
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ConfigProvider>
  );
})`
  .form__input {
    margin-bottom: 2rem;
    padding: 0.5rem;
  }

  .form__label {
    position: absolute;
    transition: all 0.3s;
  }

  .form__input:placeholder-shown + .form__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }

  .form__input:focus + .form__label {
    opacity: 1;
    visibility: visible;
    transform: translateY(-2rem);
  }

  .form__input:focus::placeholder {
    color: transparent;
  }
`;

export default LoginForm;
