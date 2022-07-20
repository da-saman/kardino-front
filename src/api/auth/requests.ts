import { ApiError } from '@api/core/ApiError';
import { LoginRequest, LoginResponse } from '@models/auth';
import { AuthService } from '@api/auth/service';
import tokenUtils from '@utils/token';

export const loginRequest = async (body:LoginRequest):Promise<LoginResponse|ApiError> => {
  const response = await AuthService.login(body);
  tokenUtils.setToken(response.token);
  console.log(response);

  return response;
};

export const logoutRequest = async () :Promise<void> => {
  try {
    await AuthService.logout();
    tokenUtils.removeToken();
  } catch (e) {
    console.log('logout error');
  }
};
