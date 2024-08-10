import { Route } from '@angular/router';
import { LoginComponent } from './components/containers/login.component';

export const authRoutes: Route[] = [
  { path: '', component: LoginComponent, pathMatch: 'full', },
];
