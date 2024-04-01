import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { RegisterUser } from '@moolahmate/shared';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  form: FormGroup;
  constructor(private authService: AuthService){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  register() {
    const user = this.form.value as RegisterUser;

    this.authService.registerUser(user).then((res) => {
      console.log(res);
      
    }).catch(err => console.log(err))
    
  }
}
