import {
  Controller,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ConfirmPassword, LoginUser } from '@moolahmate/shared';
import { ChangePasswordDTO } from './dto/change-password.dto';
import { EmailDTO } from './dto/email.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createAuthDto: CreateAuthDto) {
    try {
      return await this.authService.registerUser(createAuthDto)

    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Post('login')
  async login(@Body() createAuthDto: LoginUser) {
    try {
      return await this.authService.authenticateUser(createAuthDto)

    } catch (e) {
      throw new BadRequestException(e);

    }
  }

  @Post('changepassword')
  async changePass(@Body() change: ChangePasswordDTO) {
    try {
      return await this.authService.changeUserPassword(change)

    } catch (error) {
      throw new BadRequestException(error);

    }
  }
  @Post('confirmpassword')
  async confirmPass(@Body() confirm: ConfirmPassword) {
    try {
      return await this.authService.confirmPassword(confirm)

    } catch (error) {
      throw new BadRequestException(error);

    }
  }

  @Post('forgotpassword')
  async forgotPassword(@Body() username: EmailDTO) {
    try {
      return await this.authService.forgotPassword(username)

    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  @Post('logout')
  async logout(@Body() username: EmailDTO) {
    try {
      return await this.authService.logout(username.email)
    } catch (error) {
      throw new BadRequestException(error);

    }
  }

}
