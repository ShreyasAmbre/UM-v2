import { Route } from '@angular/router';
import { AuthModule } from '@um-workspace/auth';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => AuthModule
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
