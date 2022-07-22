import React from 'react';
import {
  Button, Form, ConfigProvider, Typography,
} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputType } from '@constants/InputType';
import { LoginRequest } from '@models/auth';
import loginSchema from '@utils/schemas/loginSchema';
import Input from '@components/input';
import { Link } from 'react-router-dom';
import { ItemStyled as Item } from '@components/input/Item.style';

interface Props {
  onSubmit: SubmitHandler<LoginRequest>
  isSubmitting: boolean
}

const { Title } = Typography;

// TODO: remove any type for controls

const LoginForm: React.FC<Props> = ({ onSubmit, isSubmitting }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
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
        initialValues={{
          remember: true,
        }}
        size='large'
        onFinish={handleSubmit(onSubmit)}
      >
        <Title level={5} className='text-center'>
          ورود به حساب کاربری
        </Title>
        <Input
          control={control as any}
          label='نام کاربری'
          name='userName'
          placeholder='Username'
          Icon={UserOutlined}
          error={errors.userName?.message}
        />
        <Input
          control={control as any}
          label='رمز عبور'
          name='password'
          placeholder='Password'
          Icon={LockOutlined}
          type={InputType.PASSWORD}
          error={errors.password?.message}
        />
        <Item>
          <Link to='/dashboard'>
            فراموشی رمز عبور
          </Link>
        </Item>
        <Item>
          <Button
            type='primary'
            htmlType='submit'
            block
            loading={isSubmitting}
            disabled={!isValid}
          >
            ورود
          </Button>
        </Item>
      </Form>
    </ConfigProvider>
  );
};

export default LoginForm;
