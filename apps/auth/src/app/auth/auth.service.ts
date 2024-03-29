import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CognitoUserSession,
  ISignUpResult,
} from 'amazon-cognito-identity-js';
import {
  AdminDeleteUserCommand,
  CognitoIdentityProviderClient,
  GetUserCommand,
  ChangePasswordCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { ConfigService } from '@nestjs/config';

import { ConfirmPassword, LoginUser, RegisterUser, Verify} from '@moolahmate/shared'

@Injectable()
export class AuthService {
  private readonly userPool: CognitoUserPool;
  private readonly cognitoIdentityServiceProvider: CognitoUserSession
  private readonly providerClient: CognitoIdentityProviderClient;
  constructor(private configService: ConfigService) {
      this.userPool = new CognitoUserPool({
          UserPoolId: configService.get<string>('UserPoolId'),
          ClientId: configService.get<string>('ClientId'),
      });
      this.providerClient = new CognitoIdentityProviderClient({
          region: configService.get<string>('Region')
      });
  }

  registerUser(register: RegisterUser): Promise<ISignUpResult> {
    const { email, password } = register;
    return new Promise((resolve, reject) => {
        return this.userPool.signUp(
            email,
            password,
            [new CognitoUserAttribute({ Name: 'email', Value: email })],
            null,
            (err, result: ISignUpResult) => {
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

  return new Promise<CognitoUserSession>((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
          onSuccess: result => {
              resolve(result);
          },
          onFailure: err => {
              reject(err);
          },
      });
  });
}

verifyUser(user: Verify) {
  return new Promise((resolve, reject) => {
      return new CognitoUser({ Username: user.email, Pool: this.userPool})
          .confirmRegistration(user.code,
              true,
              (err, result) => {
                  if(err) {
                      reject(err);
                  } else {
                      resolve(result);
                  }
          })
  });
}

forgotPassword(email:string) {
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

async deleteUser(email: string) {
  const adminDeleteUserCommand = new AdminDeleteUserCommand({
      Username: email,
      UserPoolId: this.configService.get<string>('UserPoolId')
  });

  await this.providerClient.send(adminDeleteUserCommand)
}
}
