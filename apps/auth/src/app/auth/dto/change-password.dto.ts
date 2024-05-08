import {  ResetPassword } from "@moolahmate/interfaces";
import { IsEmail, Matches } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDTO implements ResetPassword {
  
  @ApiProperty({
    example: 'john.doe@gmail.com',
    required: true
    })
    @IsEmail()
    email: string;

    @ApiProperty({
      example: 'password123',
      required: true
   })
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
        { message: 'invalid password' },
      )
    password: string;

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