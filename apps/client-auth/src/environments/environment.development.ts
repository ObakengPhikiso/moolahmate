const baseUrl = 'http://localhost:3000/api'

export const environment = {
  production: false,
  baseUrl: baseUrl,
  signin: baseUrl + '/auth/login',
  signup: baseUrl + '/auth/register',
  refreshToken: baseUrl + '/auth/refreshToken',
  forgotPassword: baseUrl + '/auth/forgotpassword',
  confirmPassword: baseUrl + '/auth/confirmpassword',
  changePassword: baseUrl + '/auth/changepassword'
};

