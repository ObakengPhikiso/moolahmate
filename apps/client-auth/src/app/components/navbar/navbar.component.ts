import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class NavbarComponent   {
  constructor(private authService: AuthService, private router: Router){}

  logout() {
    this.authService.logout().then(() => this.router.navigate(['/auth/signin']))
  }
}
