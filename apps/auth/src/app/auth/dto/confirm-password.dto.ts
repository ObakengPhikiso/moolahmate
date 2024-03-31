import { ConfirmPassword } from "@moolahmate/shared";
import { IsEmail, IsString, Matches } from "class-validator";

export class ConfirmPasswordDTO implements ConfirmPassword {
    @IsEmail()
    email: string;

    @IsString()
    verificationCode: string;
    
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
        { message: 'invalid password' },
      )
    newPassword: string;
}