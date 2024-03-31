import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 3,
        jwksUri: `https://cognito-idp.${configService.get(
          'Region',
        )}.amazonaws.com/${configService.get<string>(
          'UserPoolId',
        )}/.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: configService.get<string>('ClientId'),
      issuer: `https://cognito-idp.${configService.get<string>(
        'Region',
      )}.amazonaws.com/${configService.get<string>('UserPoolId')}`,
      algorithms: ['RS256'],
    });
  }

  public async validate(payload: any) {
    return !!payload.email;
  }
}