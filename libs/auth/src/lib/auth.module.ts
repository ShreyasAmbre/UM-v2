import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRoutes } from './lib.routes';
import { LoginFormComponent } from './components/login-form.component';
import { LoginComponent } from './components/containers/login.component';
import { AntdUiModule } from '@um-workspace/antd-ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    AntdUiModule
  ],
  declarations: [LoginComponent, LoginFormComponent],
  exports: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}
