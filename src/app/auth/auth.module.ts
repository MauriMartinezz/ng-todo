import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  providers: [AuthService],
})
export class AuthModule {}
