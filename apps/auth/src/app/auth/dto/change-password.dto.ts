import {  ResetPassword } from "@moolahmate/shared";
import { IsEmail, Matches } from "class-validator";

export class ChangePasswordDTO implements ResetPassword {
    @IsEmail()
    email: string;

    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
        { message: 'invalid password' },
      )
    password: string;
    
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
        { message: 'invalid password' },
      )
    newPassword: string;
}