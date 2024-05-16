import { Routes } from '@angular/router';
import { WilderComponent } from './wilder/wilder.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DeveloperComponent } from './developer/developer.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'wilder/:wilderName',
    component: WilderComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'developer',
    component: DeveloperComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
