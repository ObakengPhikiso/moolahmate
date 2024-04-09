const baseUrl = 'http://localhost:3000/api'

export const environment = {
  production: true,
  baseUrl: baseUrl,
  signin: baseUrl + '/auth/login',
  signup: baseUrl + '/auth/register',
  refreshToken: baseUrl + '/auth/refreshToken',
  forgotPassword: baseUrl + '/auth/forgotpassword',
  confirmPassword: baseUrl + '/auth/confirmpassword',
  changePassword: baseUrl + '/auth/changepassword'
};

