import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginUser } from '@moolahmate/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './signin.component.html',
  standalone: true,
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent  {
  form: FormGroup;
  showPassword = false;
  constructor(private router: Router, private authService: AuthService) { 
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  
  get f() {
    return this.form.controls;
  }
  signin(user: LoginUser): void {
    this.authService.signin(user).subscribe(() => {
      this.router.navigateByUrl('')
    }, (err:unknown) => {
      console.log(err);
    })
  }
}
