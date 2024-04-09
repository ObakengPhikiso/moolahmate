import { Routes } from "@angular/router";
import { AppLayoutComponent } from "./layout.component";

export const routes: Routes = [
{
    path: '', loadComponent: () => import('./layout.component').then((c) => c.AppLayoutComponent), pathMatch: 'full'
}
]