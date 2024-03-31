import { ConfigService } from "@nestjs/config";

export class AuthConfig {
  constructor(private config: ConfigService) {}

  public userPoolId: string =this.config.get<string>('UserPoolId');
  public clientId: string = this.config.get<string>('ClientId');
  public region: string = this.config.get<string>('Region');
  public authority = 'https://moolahmate.auth.us-east-1.amazoncognito.com';
}