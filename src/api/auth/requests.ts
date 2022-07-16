import { ApiError } from '../core/ApiError';
import { LoginRequest, LoginResponse } from '../../models/auth';
import { AuthService } from './service';
import tokenUtils from '../../utils/token';

export const loginRequest = async (body:LoginRequest):Promise<LoginResponse|ApiError> => {
  try {
    const response = await AuthService.login(body);
    tokenUtils.setToken(response.access_token);

    return response;
  } catch (e) {
    console.log('Login Error');
    return (e as ApiError);
  }
};

export const logoutRequest = async () :Promise<void> => {
  try {
    await AuthService.logout();
    tokenUtils.removeToken();
  } catch (e) {
    console.log('logout error');
  }
};
