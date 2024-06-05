import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path:'user',
    loadComponent: () => import('./pages/user/user.component'),
 },
 {
    path:'user-info',
    loadComponent: () => import('./pages/user-info/user-info.component'),
 },
 {
  path:'',
  pathMatch:'full',
  redirectTo:'/user'
 }

];
