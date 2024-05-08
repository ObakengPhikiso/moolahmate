import { ConfirmPassword } from "@moolahmate/interfaces";
import { IsEmail, IsString, Matches } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class ConfirmPasswordDTO implements ConfirmPassword {
  @ApiProperty({
    example: 'john.doe@gmail.com',
    required: true
    })
    @IsEmail()
    email: string;

    @ApiProperty({
      example: '123454',
      required: true
      })
    @IsString()
    verificationCode: string;

    @ApiProperty({
      example: 'password123',
      required: true
      })
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
        { message: 'invalid password' },
      )
    newPassword: string;
}