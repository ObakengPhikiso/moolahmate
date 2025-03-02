import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HttpModule} from '@nestjs/axios'
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UserModule } from '../user/user.module';
@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports:[HttpModule, PassportModule.register({ defaultStrategy: 'jwt' }), UserModule]
})
export class AuthModule {}
