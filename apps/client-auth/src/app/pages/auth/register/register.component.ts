import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RegisterUser } from '@moolahmate/interfaces';
import { CommonModule } from '@angular/common';
import { AuthService, CustomvalidatorService, StrongPasswordRegx } from '@moolahmate/utils';
import { LoaderComponent } from '@moolahmate/ui-components';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [RouterModule, ReactiveFormsModule, CommonModule,LoaderComponent],
  standalone: true,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  showPassword = false;
  
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(StrongPasswordRegx)]),
    confirm_password: new FormControl('', [Validators.required, Validators.pattern(StrongPasswordRegx)]),
  }, [CustomvalidatorService.MatchValidator('password','confirm_password')]);

  constructor(private router: Router, private authService: AuthService) {
   }
   get passwordFormField() {
    return this.form.get('password');
  }
  

  signup(): void {
        const user = this.form.value as RegisterUser
    this.authService.signup(user).subscribe(() => {
      this.router.navigateByUrl('auth/login')
    }, (err:unknown) => {
      console.log(err);
    })
  }

  get f() {
    return this.form.controls;
  }

  get passwordMatchError() {
    return (this.form.getError('mismatch') && this.form.get('confirm_password')?.touched)
  }

}
