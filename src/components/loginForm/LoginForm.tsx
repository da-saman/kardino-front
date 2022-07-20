import React from 'react';
import {
  Button, Card, Form, ConfigProvider, Col, Typography,
} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputType } from '@constants/InputType';
import { LoginRequest } from '@models/auth';
import loginSchema from '@utils/schemas/loginSchema';
import Input from '@components/input';
import { Link } from 'react-router-dom';

interface Props {
  onSubmit: SubmitHandler<LoginRequest>
  isSubmitting: boolean
}

const { Title, Link: AntLink } = Typography;

const LoginForm: React.FC<Props> = ({ onSubmit, isSubmitting }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, submitCount },
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
    mode: 'all',
    delayError: 500,
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
    reValidateMode: 'onChange',

  });

  return (
    <ConfigProvider direction='rtl'>
      <Form
        name='login'
        labelCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit(onSubmit)}
        autoComplete='off'
      >
        <Card className='card'>
          <Col>
            <Title level={5} className='text-center'>
              ورود به حساب کاربری
            </Title>
            <Input
              errorClassName='ant-form-item-has-error'
              containerClassName='mb-1'
              control={control as any}
              label='نام کاربری'
              name='userName'
              placeholder='Username'
              Icon={UserOutlined}
              error={errors.userName?.message}
            />
            <Input
              errorClassName='ant-form-item-has-error'
              containerClassName='mb-1'
              control={control as any}
              label='رمز عبور'
              name='password'
              placeholder='Password'
              Icon={LockOutlined}
              type={InputType.PASSWORD}
              error={errors.password?.message}
            />
            <Form.Item>
              <Link to='/dashboard'>
                فراموشی رمز عبور
              </Link>
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                block
                loading={isSubmitting}
                disabled={!isValid}
              >
                ورود
              </Button>
            </Form.Item>
          </Col>
        </Card>
        <p>
          {submitCount }
          to captcha
        </p>
      </Form>
    </ConfigProvider>
  );
};

export default LoginForm;
