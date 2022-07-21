import React from 'react';
import LoginForm from '@components/loginForm';
import { SubmitHandler } from 'react-hook-form';
import { LoginRequest } from '@models/auth';
import { loginRequest } from '@api/auth/requests';
import { useNavigate } from 'react-router-dom';

const LoginSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const onSubmitLogin: SubmitHandler<LoginRequest> = async (data) => {
    setLoading(true);
    loginRequest(data)
      .then(() => navigate('/dashboard'))
      .catch((e) => console.log(e)).finally(() => { setLoading(false); });
  };

  return <LoginForm onSubmit={onSubmitLogin} isSubmitting={loading} />;
};

export default LoginSection;
