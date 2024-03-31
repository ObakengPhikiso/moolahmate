import { Injectable } from '@angular/core';
import { RegisterUser, LoginUser, ConfirmPassword } from '@moolahmate/shared';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  async registerUser(register: RegisterUser): Promise<any> {
 return;
}

authenticateUser(login: LoginUser) {
  return
}


forgotPassword(email:string)  {
  return;
}

confirmPassword(confirm: ConfirmPassword) {
  return;
}
}
