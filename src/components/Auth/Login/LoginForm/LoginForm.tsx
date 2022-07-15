import React from 'react';
import {
  Button, Checkbox, Form, ConfigProvider, Row, Col,
} from 'antd';

import { useNavigate } from 'react-router-dom';
import { LoginInput, LoginLabel } from '@components/Auth/Login/LoginForm/LoginForm.styles';
import { InputType } from '../../../../models';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <ConfigProvider direction="rtl">
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <LoginInput placeholder="نام کاربری" type={InputType.TEXT} />
            <LoginLabel
              label="نام کاربری"
              name="username"
            />
          </Col>

          <Col span={24}>
            <LoginInput placeholder="رمز عبور" type={InputType.PASSWORD} />
            <LoginLabel
              label="  رمز عبور"
              name="password"

            />
          </Col>

          <Col span={24}>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-100"
                onClick={() => {
                  navigate('/dashboard');
                }}
              >
                Log in
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ConfigProvider>
  );
};

export default LoginForm;
