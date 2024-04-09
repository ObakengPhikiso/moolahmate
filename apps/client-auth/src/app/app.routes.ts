import { Route } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Route[] = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./components/layout/layout.routes').then(m => m.routes), canActivate: [AuthGuard]},
    {path: 'auth', loadChildren: () => import('./pages/auth/auth.routes').then(m => m.routes)},
    {path: '**', redirectTo: ''}
];
