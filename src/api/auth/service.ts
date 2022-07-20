import type { LoginRequest, LoginResponse } from '@models/auth';
import { request as __request } from '@api/core/request';

export class AuthService {
  /**
     * Login admin
     * this end point validates admin credentials and if it's ok issues a token.
     * @param requestBody Admin login request body
     * @returns AdminTokenResource Admin Token resource response
     * @throws ApiError
     */
  public static async login(
    requestBody: LoginRequest,
  ): Promise<LoginResponse> {
    const result = await __request({
      method: 'POST',
      path: '/api/Login',
      body: requestBody,
      errors: {
        401: 'Unauthorized, the user is unauthenticated.',
        422: 'Unprocessable Entity.',
      },
    });
    return result.body;
  }

  /**
     * Logout admin
     * this end point will revoke current token.
     * @returns void
     * @throws ApiError
     */
  public static async logout(): Promise<void> {
    const result = await __request({
      method: 'DELETE',
      path: '/api/admin/auth/logout',
      errors: {
        401: 'Unauthorized, the user is unauthenticated.',
        403: 'Unauthorized, the user is unauthenticated.',
      },
    });
    return result.body;
  }
}
