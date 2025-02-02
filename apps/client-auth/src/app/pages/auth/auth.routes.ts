import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const routes: Routes = [
  {path: '', component: AuthComponent, children: [
    {path: 'signin', loadComponent: () => import('./signin/signin.component').then((c) => c.SigninComponent), pathMatch: 'full'},
    {path: 'signup', loadComponent: () => import('./register/register.component').then((c) => c.RegisterComponent), pathMatch: 'full'},
    {path: 'forgot-password', loadComponent: () => import('./forgot-password/forgot-password.component').then((c) => c.ForgotPasswordComponent), pathMatch: 'full'},
    {path: 'confirm-password', loadComponent: () => import('./confirm-password/confirm-password.component').then((c) => c.ConfirmPasswordComponent), data: {
      email: ''
    }, pathMatch: 'full'},
  ]},

  {path: '**', redirectTo: 'signin', pathMatch: 'full'},
];

