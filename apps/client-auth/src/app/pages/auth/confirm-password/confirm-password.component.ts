import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ConfirmPassword } from '@moolahmate/interfaces';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '@moolahmate/ui-components';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss'],
  imports: [ReactiveFormsModule, CommonModule, LoaderComponent],
  standalone: true
})
export class ConfirmPasswordComponent  {
showPassword = false;
form: FormGroup
  constructor(private router: Router, private activeRoute: ActivatedRoute, private authService: AuthService) {
    let email = '';
    this.activeRoute.data.subscribe(data =>email= data['email'] as string)
    this.form = new FormGroup({
    verificationCode: new FormControl('', [Validators.required]),
    email: new FormControl(email, [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
  });
  
   }

  
  get f() {
    return this.form.controls;
  }
  confirmPassword(form: ConfirmPassword): void {
    this.authService.confirmPassword(form).subscribe(() => {
      this.router.navigateByUrl('/auth')
    }, (err:unknown) => {
      console.log(err);
    })
  }

}
