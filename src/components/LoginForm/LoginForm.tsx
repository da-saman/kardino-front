import React from 'react';
import {
  Button, Checkbox, Form, ConfigProvider, Row, Col,
} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputType } from '@constants/InputType';
import { LoginRequest } from '@models/auth';
import loginSchema from '@utils/schemas/loginSchema';
import Input from '@components/Input';

interface Props {
  onSubmit: SubmitHandler<LoginRequest>
  isSubmitting: boolean
}

const LoginForm: React.FC<Props> = ({ onSubmit, isSubmitting }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginRequest>({ resolver: yupResolver(loginSchema) });

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
        <Input
          errorClassName='ant-form-item-has-error mb-1'
          containerClassName='mb-3'
          control={control as any}
          name='email'
          placeholder='Email'
          Icon={UserOutlined}
          type={InputType.EMAIL}
          error={errors.email?.message}
        />
        <Input
          errorClassName='ant-form-item-has-error mb-1'
          control={control as any}
          name='password'
          placeholder='Password'
          Icon={LockOutlined}
          type={InputType.PASSWORD}
          error={errors.password?.message}
        />

        <Form.Item name='remember' valuePropName='checked'>
          <Checkbox>
            من را به خاطر بسپار
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='w-100'
            loading={isSubmitting}
          >
            ورود
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default LoginForm;
