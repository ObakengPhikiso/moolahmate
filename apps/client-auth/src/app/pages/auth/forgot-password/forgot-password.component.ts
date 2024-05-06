import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '@moolahmate/ui-components';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule, LoaderComponent],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent  {

form: FormGroup;
  constructor(private router: Router, private authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
   }

  
  get f() {
    return this.form.controls;
  }
  reset(email: string): void {
    this.authService.forgotPassword(email).subscribe(() => {
      this.router.navigateByUrl('/auth/confirm-password',{state: {email}})
    }, (err:unknown) => {
      console.log(err);
    })
  }
}
