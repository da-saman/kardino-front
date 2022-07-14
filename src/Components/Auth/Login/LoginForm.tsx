import { VoidFunctionComponent } from 'react';
import { Button, Form, Typography } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { AppLoginRequest } from '../../../api/main';
import { loginSchema } from '../../../schemas';
import Input from '../../UiKit/Inputs/Input';
import { InputType } from '../../../models';

interface Props {
  onSubmit: SubmitHandler<AppLoginRequest>;
  isSubmitting?: boolean;
}

const LoginForm: VoidFunctionComponent<Props> = ({
  onSubmit,
  isSubmitting = false,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AppLoginRequest>({ resolver: yupResolver(loginSchema) });

  return (
    <Form name='login' onFinish={handleSubmit(onSubmit)} noValidate>
      <Input
        errorClassName='ant-form-item-has-error mb-1'
        containerClassName='mb-3'
        control={control}
        name='email'
        placeholder='Email'
        Icon={UserOutlined}
        type={InputType.EMAIL}
        error={errors.email?.message}
      />
      <Input
        errorClassName='ant-form-item-has-error mb-1'
        control={control}
        name='password'
        placeholder='Password'
        Icon={LockOutlined}
        type={InputType.PASSWORD}
        error={errors.password?.message}
      />
      <Form.Item>
        <Link to='/forgot-password' component={Typography.Link}>
          Forgot your password?
        </Link>
      </Form.Item>
      <Form.Item>
        <Button
          htmlType='submit'
          type='primary'
          className='w-100'
          loading={isSubmitting}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
