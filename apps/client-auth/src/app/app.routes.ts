import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    // {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
    {path: 'auth', loadChildren: () => import('./pages/auth/auth.routes').then(m => m.routes)},
    {path: '**', redirectTo: ''}
];
