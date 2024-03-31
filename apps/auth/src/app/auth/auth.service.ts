import { Injectable, Logger } from '@nestjs/common';

import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  ISignUpResult,
} from 'amazon-cognito-identity-js';

import { ConfigService } from '@nestjs/config';

import { ConfirmPassword, LoginUser, RegisterUser} from '@moolahmate/shared'
import { ChangePasswordDTO } from './dto/change-password.dto';
import { EmailDTO } from './dto/email.dto';

@Injectable()
export class AuthService {
  private readonly userPool: CognitoUserPool;

  constructor(private configService: ConfigService) {
      this.userPool = new CognitoUserPool({
          UserPoolId: configService.get<string>('UserPoolId'),
          ClientId: configService.get<string>('ClientId'),
      });


  }

  async registerUser(register: RegisterUser): Promise<ISignUpResult> {
    const { name,email, password } = register;
    return new Promise((resolve, reject) => {
        return this.userPool.signUp(
            email,
            password,
            [
                new CognitoUserAttribute({ Name: 'name', Value: name }),
            ],
            null,
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            },
        );
    });
}

authenticateUser(login: LoginUser) {
  const { email, password } = login;

  const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
  });

  const userData = {
      Username: email,
      Pool: this.userPool,
  };

  const newUser = new CognitoUser(userData);

  return new Promise((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
          onSuccess: (result) => {
            resolve({
                accessToken: result.getAccessToken().getJwtToken(),
                refreshToken: result.getRefreshToken().getToken(),
              });
          },
          onFailure: err => {
              reject(err);
          },
      });
  });
}


forgotPassword(forgot:EmailDTO): Promise<void>  {
    const {email} = forgot
  return new Promise((resolve, reject) => {
      return new CognitoUser({Username: email, Pool: this.userPool}).forgotPassword(
          {
              onSuccess: function (result) {
                  resolve(result);
              },
              onFailure: function (err) {
                  reject(err)
              }
          });
  });
}

confirmPassword(confirm: ConfirmPassword) {
  return new Promise((resolve, reject) => {
      return new CognitoUser({Username: confirm.email, Pool: this.userPool}).confirmPassword(confirm.verificationCode, confirm.newPassword, {
          onSuccess: function (result) {
              resolve(result);
          },
          onFailure: function (err) {
              reject(err)
          }
      });
  });
}

async changeUserPassword(
    changePasswordDto: ChangePasswordDTO,
  ) {
    const { email, password, newPassword } = changePasswordDto;

    const userData = {
      Username: email,
      Pool: this.userPool,
    };

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const userCognito = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      userCognito.authenticateUser(authenticationDetails, {
        onSuccess: () => {
          userCognito.changePassword(
            password,
            newPassword,
            (err, result) => {
              if (err) {
                reject(err);
                return;
              }
              resolve(result);
            },
          );
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }



logout(email: string) {
    return new Promise((resolve, reject) => {
        const user =  new CognitoUser({Username: email, Pool: this.userPool})
        if(!user) reject('User not found')
        user.signOut()
        resolve('User signed out');
    })

}   

}
